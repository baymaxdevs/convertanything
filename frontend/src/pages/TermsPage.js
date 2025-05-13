import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const TermsPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 5 }}>
        Terms of Service
      </Typography>
      
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="body2" color="text.secondary" paragraph align="center">
          Last Updated: May 1, 2025
        </Typography>
        
        <Typography variant="body1" paragraph>
          Please read these Terms of Service ("Terms") carefully before using the Convert Anything website and file conversion service.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          1. Acceptance of Terms
        </Typography>
        
        <Typography variant="body1" paragraph>
          By accessing or using the Convert Anything service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the service.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          2. Description of Service
        </Typography>
        
        <Typography variant="body1" paragraph>
          Convert Anything provides a file conversion service that allows users to convert various file formats to other formats. The service processes user-uploaded files and makes the converted results available for download.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          4. User Content and Conduct
        </Typography>
        
        <Typography variant="body1" paragraph>
          4.1. Our service allows you to upload files for conversion. You retain all ownership rights to the content you upload.
        </Typography>
        
        <Typography variant="body1" paragraph>
          4.2. By uploading content to our service, you grant us a limited license to use, process, store, and transfer the content solely for the purpose of providing and improving our service.
        </Typography>
        
        <Typography variant="body1" paragraph>
          4.3. You agree not to upload, transmit, or share content that:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              Infringes on any patent, trademark, trade secret, copyright, or other intellectual property rights of any party
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              Is illegal, harmful, threatening, abusive, harassing, defamatory, obscene, or otherwise objectionable
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              Contains malware, viruses, or any other malicious software
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              Violates the privacy or publicity rights of any third party
            </Typography>
          </li>
        </ul>
        
        <Typography variant="body1" paragraph>
          4.4. We reserve the right, but not the obligation, to review, monitor, or remove content that we determine, in our sole discretion, violates these Terms or is otherwise objectionable.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          5. File Storage and Retention
        </Typography>
        
        <Typography variant="body1" paragraph>
          5.1. Uploaded files are temporarily stored on our servers for processing. By default, these files are automatically deleted after 24 hours.
        </Typography>
        
        <Typography variant="body1" paragraph>
          5.2. Converted files are also stored temporarily to allow you to download them. These files are also deleted after 24 hours.
        </Typography>
        
        <Typography variant="body1" paragraph>
          5.4. We are not responsible for any loss of data that may occur due to the automatic deletion of files or any other reason.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          6. Service Limitations
        </Typography>
        
        <Typography variant="body1" paragraph>
          6.1. The service has file size limitations. You may not upload files larger than 500MB.
        </Typography>
        
        <Typography variant="body1" paragraph>
          6.2. The quality and accuracy of conversions may vary depending on the file type, content, and conversion path.
        </Typography>
        
        <Typography variant="body1" paragraph>
          6.3. Not all conversion paths are guaranteed to work for all files. We strive to support as many formats as possible, but some conversions may result in errors or suboptimal output.
        </Typography>
        
        <Typography variant="body1" paragraph>
          6.4. The service may have usage limits to prevent abuse. We reserve the right to limit the number of conversions per user or IP address.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          7. Intellectual Property
        </Typography>
        
        <Typography variant="body1" paragraph>
          7.1. The Convert Anything service, including its name, logo, website design, and software, is protected by copyright, trademark, and other intellectual property laws.
        </Typography>
        
        <Typography variant="body1" paragraph>
          7.2. You agree not to copy, modify, distribute, sell, or lease any part of our service or included software, nor may you reverse engineer or attempt to extract the source code of the software.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          8. Disclaimer of Warranties
        </Typography>
        
        <Typography variant="body1" paragraph>
          8.1. The service is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.
        </Typography>
        
        <Typography variant="body1" paragraph>
          8.2. We do not warrant that the service will be uninterrupted, timely, secure, or error-free, or that any errors in the software will be corrected.
        </Typography>
        
        <Typography variant="body1" paragraph>
          8.3. We make no warranties about the accuracy, reliability, completeness, or quality of any conversions or content obtained through our service.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          9. Limitation of Liability
        </Typography>
        
        <Typography variant="body1" paragraph>
          9.1. In no event shall Convert Anything be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </Typography>
        
        <Typography variant="body1" paragraph>
          9.2. Our liability is limited to the maximum extent permitted by law.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          10. Indemnification
        </Typography>
        
        <Typography variant="body1" paragraph>
          You agree to indemnify, defend, and hold harmless Convert Anything and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses arising from your use of the service or your violation of these Terms.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          11. Modifications to the Service and Terms
        </Typography>
        
        <Typography variant="body1" paragraph>
          11.1. We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.
        </Typography>
        
        <Typography variant="body1" paragraph>
          11.2. We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to use the service after revisions become effective, you agree to be bound by the revised Terms.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          12. Governing Law
        </Typography>
        
        <Typography variant="body1" paragraph>
          These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          13. Contact Information
        </Typography>
        
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms, please contact us at terms@convertanything.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsPage;