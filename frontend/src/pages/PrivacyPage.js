import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const PrivacyPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 5 }}>
        Privacy Policy
      </Typography>
      
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="body2" color="text.secondary" paragraph align="center">
          Last Updated: May 1, 2025
        </Typography>
        
        <Typography variant="body1" paragraph>
          Your privacy is important to us. This Privacy Policy explains how Convert Anything ("we", "our", or "us") collects, uses, and protects your information when you use our file conversion service.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          Information We Collect
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          User-Provided Information
        </Typography>
        <Typography variant="body1" paragraph>
          When you use our service, we may collect the following information:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Files:</strong> We process the files you upload for conversion. These may include images, documents, videos, audio files, and other file types.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Conversion Preferences:</strong> We collect information about your conversion selections and preferences.
            </Typography>
          </li>
        </ul>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Automatically Collected Information
        </Typography>
        <Typography variant="body1" paragraph>
          When you use our service, our servers automatically record certain information, including:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Usage Data:</strong> Information about how you use our service, such as the types of conversions you perform, frequency of use, and features you interact with.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Device Information:</strong> Information about the device you use to access our service, including hardware model, operating system, and browser type.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Log Data:</strong> Server logs, including your IP address, access times, and pages viewed.
            </Typography>
          </li>
        </ul>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          How We Use Your Information
        </Typography>
        
        <Typography variant="body1" paragraph>
          We use the information we collect for the following purposes:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Provide Our Service:</strong> To process your file conversions and deliver the converted files to you.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Improve Our Service:</strong> To understand how users interact with our service and make improvements.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Communicate With You:</strong> To respond to your inquiries, provide customer support, and send service-related notifications.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Security:</strong> To detect, prevent, and address technical issues and security threats.
            </Typography>
          </li>
        </ul>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          File Storage and Retention
        </Typography>
        
        <Typography variant="body1" paragraph>
          <strong>Uploaded Files:</strong> By default, files you upload are temporarily stored on our servers only for the time needed to process your conversion. They are automatically deleted after 24 hours.
        </Typography>
        
        <Typography variant="body1" paragraph>
          <strong>Converted Files:</strong> Converted files are stored for 24 hours to allow you to download them. After this period, they are automatically deleted from our servers.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          Data Security
        </Typography>
        
        <Typography variant="body1" paragraph>
          We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These include:
        </Typography>
        
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Encryption:</strong> All data transfer between your device and our servers is encrypted using SSL/TLS.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Access Controls:</strong> We restrict access to your information to authorized personnel only.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Regular Security Audits:</strong> We regularly review our security practices to ensure the continued security of our systems.
            </Typography>
          </li>
        </ul>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          Your Rights
        </Typography>
        
        <Typography variant="body1" paragraph>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </Typography>
        
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Access:</strong> The right to request access to the personal information we hold about you.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Correction:</strong> The right to request that we correct inaccurate or incomplete information about you.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Deletion:</strong> The right to request that we delete your personal information.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Objection:</strong> The right to object to our processing of your personal information.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Data Portability:</strong> The right to receive your personal information in a structured, commonly used, and machine-readable format.
            </Typography>
          </li>
        </ul>
        
        <Typography variant="body1" paragraph>
          To exercise these rights, please contact us at privacy@convertanything.com.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          Changes to This Privacy Policy
        </Typography>
        
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </Typography>
        
        <Typography variant="body1" paragraph>
          We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          Contact Us
        </Typography>
        
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </Typography>
        
        <Typography variant="body1" paragraph>
          Email: privacy@convertanything.com
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPage;