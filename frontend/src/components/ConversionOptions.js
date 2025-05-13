import React, { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Divider,
  CircularProgress,
  Tabs,
  Tab,
  IconButton,
  Chip,
  Tooltip,
  Collapse,
  Alert,
  useTheme
} from '@mui/material';
import {
  Info as InfoIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon
} from '@mui/icons-material';

// Icons for different file types
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MovieIcon from '@mui/icons-material/Movie';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import PresentationIcon from '@mui/icons-material/Slideshow';
import TableChartIcon from '@mui/icons-material/TableChart';
import CodeIcon from '@mui/icons-material/Code';
import CreateIcon from '@mui/icons-material/Create';

const ConversionOptions = ({
  fileInfo,
  conversionOptions,
  onConvert,
  loading,
  error
}) => {
  const theme = useTheme();
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [advancedOptions, setAdvancedOptions] = useState({});
  const [tabValue, setTabValue] = useState(0);
  const [favorites, setFavorites] = useState([]);

  // Group conversion options by category
  const groupedOptions = conversionOptions?.reduce((acc, option) => {
    const category = option.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(option);
    return acc;
  }, {}) || {};

  // Get all categories
  const categories = Object.keys(groupedOptions);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle format selection
  const handleFormatSelect = (format) => {
    setSelectedFormat(format);

    // Initialize advanced options based on format
    let options = {};

    // For video to GIF conversion
    if (fileInfo?.category === 'videos' && format.ext === '.gif') {
      options = {
        startTime: 0,
        duration: 10,
      };
    }

    // For image to sticker conversion
    if (fileInfo?.category === 'image' && format.ext === '.png' && format.is_sticker) {
      options = {
        makeTransparent: true,
      };
    }

    setAdvancedOptions(options);
  };

  // Handle advanced options change
  const handleOptionsChange = (name, value) => {
    setAdvancedOptions({
      ...advancedOptions,
      [name]: value
    });
  };

  // Toggle favorite status for a format
  const toggleFavorite = (format) => {
    const formatKey = `${format.abbr}${format.ext}`;
    if (favorites.includes(formatKey)) {
      setFavorites(favorites.filter(f => f !== formatKey));
    } else {
      setFavorites([...favorites, formatKey]);
    }
  };

  // Handle the convert button click
  const handleConvert = () => {
    if (!selectedFormat) return;

    onConvert(selectedFormat, advancedOptions);
  };

  // Get icon for a category
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'image':
        return <ImageIcon />;
      case 'document':
        return <DescriptionIcon />;
      case 'videos':
        return <MovieIcon />;
      case 'audio':
        return <AudiotrackIcon />;
      case 'archieves':
        return <FolderZipIcon />;
      case 'presentations':
        return <PresentationIcon />;
      case 'spreadsheets':
        return <TableChartIcon />;
      case 'vectors':
        return <CreateIcon />;
      case 'ebook':
        return <PictureAsPdfIcon />;
      default:
        return <CodeIcon />;
    }
  };

  // Check if we have valid file info and options
  if (!fileInfo) {
    return (
      <Alert severity="error">
        File information is missing. Please go back and upload the file again.
      </Alert>
    );
  }

  // Log file info for debugging
  console.log('ConversionOptions component received fileInfo:', fileInfo);
  console.log('ConversionOptions component received options:', conversionOptions);

  // If no options available
  if (!conversionOptions || conversionOptions.length === 0) {
    return (
      <Alert severity="info">
        No conversion options available for this file type ({fileInfo.ext || 'unknown'}).
      </Alert>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* Error display */}
      <Collapse in={!!error}>
        <Alert
          severity="error"
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      </Collapse>

      {/* File info display */}
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 2 }}>
          {getCategoryIcon(fileInfo?.category || 'document')}
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            {fileInfo?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Original format: {fileInfo?.ext || 'Unknown'} • Category: {fileInfo?.category || 'Unknown'}
          </Typography>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom>
        Select Target Format
      </Typography>

      {/* Category tabs */}
      <Box sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All" value={0} />
          <Tab label="Popular" value={1} />
          <Tab label="Favorites" value={2} />
          {categories.map((category, index) => (
            <Tab
              key={category}
              label={category.charAt(0).toUpperCase() + category.slice(1)}
              value={index + 3}
              icon={getCategoryIcon(category)}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>

      {/* Loading state */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {/* Format selection grid */}
          <Grid container spacing={1}>
            {/* Show formats based on selected tab */}
            {tabValue === 0 && (
              // All formats
              conversionOptions.map((format, index) => (
                <Grid item xs={4} sm={4} md={3} key={`${format.abbr}-${format.ext}-${index}`}>
                  <FormatCard
                    format={format}
                    isSelected={selectedFormat?.abbr === format.abbr && selectedFormat?.ext === format.ext}
                    isFavorite={favorites.includes(`${format.abbr}${format.ext}`)}
                    onSelect={() => handleFormatSelect(format)}
                    onToggleFavorite={() => toggleFavorite(format)}
                  />
                </Grid>
              ))
            )}

            {tabValue === 1 && (
              // Popular formats (example implementation - you might want different logic)
              conversionOptions
                .filter(format => format.is_popular || format.is_cross_category)
                .map((format, index) => (
                  <Grid item xs={4} sm={4} md={3} key={`pop-${format.abbr}-${format.ext}-${index}`}>
                    <FormatCard
                      format={format}
                      isSelected={selectedFormat?.abbr === format.abbr && selectedFormat?.ext === format.ext}
                      isFavorite={favorites.includes(`${format.abbr}${format.ext}`)}
                      onSelect={() => handleFormatSelect(format)}
                      onToggleFavorite={() => toggleFavorite(format)}
                    />
                  </Grid>
                ))
            )}

            {tabValue === 2 && (
              // Favorites
              conversionOptions
                .filter(format => favorites.includes(`${format.abbr}${format.ext}`))
                .map((format, index) => (
                  <Grid item xs={4} sm={4} md={3} key={`fav-${format.abbr}-${format.ext}-${index}`}>
                    <FormatCard
                      format={format}
                      isSelected={selectedFormat?.abbr === format.abbr && selectedFormat?.ext === format.ext}
                      isFavorite={true}
                      onSelect={() => handleFormatSelect(format)}
                      onToggleFavorite={() => toggleFavorite(format)}
                    />
                  </Grid>
                ))
            )}

            {/* Category-specific tabs */}
            {tabValue > 2 && categories[tabValue - 3] && (
              groupedOptions[categories[tabValue - 3]].map((format, index) => (
                <Grid item xs={4} sm={4} md={3} key={`cat-${format.abbr}-${format.ext}-${index}`}>
                  <FormatCard
                    format={format}
                    isSelected={selectedFormat?.abbr === format.abbr && selectedFormat?.ext === format.ext}
                    isFavorite={favorites.includes(`${format.abbr}${format.ext}`)}
                    onSelect={() => handleFormatSelect(format)}
                    onToggleFavorite={() => toggleFavorite(format)}
                  />
                </Grid>
              ))
            )}
          </Grid>

          {/* Advanced options */}
          {selectedFormat && (
            <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>
                Advanced Options
              </Typography>

              {/* Video to GIF options */}
              {fileInfo?.category === 'videos' && selectedFormat.ext === '.gif' && (
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Start Time (seconds)"
                      type="number"
                      value={advancedOptions.startTime}
                      onChange={(e) => handleOptionsChange('startTime', Number(e.target.value))}
                      inputProps={{ min: 0, step: 0.1 }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Duration (seconds, max 30)"
                      type="number"
                      value={advancedOptions.duration}
                      onChange={(e) => handleOptionsChange('duration', Number(e.target.value))}
                      inputProps={{ min: 1, max: 30, step: 0.1 }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              )}

              {/* Image to sticker options */}
              {fileInfo?.category === 'image' && selectedFormat.ext === '.png' && selectedFormat.is_sticker && (
                <Box sx={{ mt: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={advancedOptions.makeTransparent}
                        onChange={(e) => handleOptionsChange('makeTransparent', e.target.checked)}
                      />
                    }
                    label="Make background transparent"
                  />
                </Box>
              )}

              {/* Default message for no special options */}
              {!(
                (fileInfo?.category === 'videos' && selectedFormat.ext === '.gif') ||
                (fileInfo?.category === 'image' && selectedFormat.ext === '.png' && selectedFormat.is_sticker)
              ) && (
                <Typography variant="body2" color="text.secondary">
                  No special options available for this conversion.
                </Typography>
              )}
            </Box>
          )}

          {/* Convert button */}
          {selectedFormat && (
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleConvert}
                disabled={loading}
                sx={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  borderRadius: 0,
                  py: 1.5,
                  px: { xs: 3, sm: 4 },
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: '#333333',
                  },
                  '&.Mui-disabled': {
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }
                }}
              >
                {loading ? (
                  <>
                    <CircularProgress size={24} sx={{ mr: 1, color: '#FFFFFF' }} />
                    Converting...
                  </>
                ) : (
                  `Convert to ${selectedFormat.abbr}`
                )}
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

// Card component for each format option
const FormatCard = ({ format, isSelected, isFavorite, onSelect, onToggleFavorite }) => {
  const theme = useTheme();

  return (
    <Card
      raised={isSelected}
      sx={{
        height: '100%',
        position: 'relative',
        transition: 'all 0.2s',
        border: isSelected ? `2px solid #000000` : 'none',
        '&:hover': {
          transform: 'translateY(-4px)'
        },
        minHeight: { xs: '120px', sm: '140px' },
        overflow: 'hidden'
      }}
    >
      <CardActionArea
        onClick={onSelect}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          p: { xs: 0.5, sm: 1 }
        }}
      >
        <CardContent sx={{
          flexGrow: 1,
          pb: { xs: 0.5, sm: 1 },
          px: { xs: 1, sm: 2 },
          pt: { xs: 1.5, sm: 2 }
        }}>
          <Box sx={{ position: 'absolute', top: 4, right: 4 }}>
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              sx={{ p: { xs: 0.3, sm: 0.5 } }}
            >
              {isFavorite ? (
                <StarIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.25rem' } }} color="primary" />
              ) : (
                <StarBorderIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.25rem' } }} />
              )}
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            component="div"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              mb: { xs: 0.5, sm: 1 },
              fontWeight: 600
            }}
          >
            {format.abbr}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            {format.ext}
          </Typography>

          <Box sx={{
            mt: { xs: 0.5, sm: 1 },
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: { xs: 0.3, sm: 0.5 }
          }}>
            {format.is_cross_category && (
              <Chip
                label="Cross-Format"
                size="small"
                color="secondary"
                variant="outlined"
                sx={{
                  height: { xs: '20px', sm: '24px' },
                  '& .MuiChip-label': {
                    fontSize: { xs: '0.6rem', sm: '0.75rem' },
                    px: { xs: 0.5, sm: 0.75 }
                  }
                }}
              />
            )}
            {format.is_sticker && (
              <Chip
                label="Sticker"
                size="small"
                color="info"
                variant="outlined"
                sx={{
                  height: { xs: '20px', sm: '24px' },
                  '& .MuiChip-label': {
                    fontSize: { xs: '0.6rem', sm: '0.75rem' },
                    px: { xs: 0.5, sm: 0.75 }
                  }
                }}
              />
            )}
            {format.is_animation && (
              <Chip
                label="Animation"
                size="small"
                color="info"
                variant="outlined"
                sx={{
                  height: { xs: '20px', sm: '24px' },
                  '& .MuiChip-label': {
                    fontSize: { xs: '0.6rem', sm: '0.75rem' },
                    px: { xs: 0.5, sm: 0.75 }
                  }
                }}
              />
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ConversionOptions;