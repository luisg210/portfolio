import { FormEvent, useState } from 'react';
import { Alert, Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { Mail } from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/SectionHeading';
import { profile, whatsappLink } from '@/data/portfolio';
import { WhatsAppIcon } from '@/components/icons';

const Contact = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const whatsappUrl = whatsappLink(t('whatsapp.message'));

  return (
    <Box id="contact" sx={{ mt: 6, scrollMarginTop: 88 }}>
      <SectionHeading title={t('sections.contact')} subtitle={t('contact.subtitle')} />
      <Card sx={{ maxWidth: 640, mx: 'auto' }}>
        <CardContent>
          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {t('contact.sent')}
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              label={t('contact.name')}
              required
              fullWidth
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <TextField
              label={t('contact.email')}
              type="email"
              required
              fullWidth
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              label={t('contact.message')}
              required
              fullWidth
              multiline
              minRows={4}
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" size="large">
              {t('contact.sendEmail')}
            </Button>
          </Box>

          <Typography variant="body2" color="text.secondary" align="center" sx={{ my: 2 }}>
            {t('contact.orWrite')}
          </Typography>

          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ '& .MuiButton-root': { mb: { xs: 2, sm: 0 } } }}
          >
            <Button
              variant="outlined"
              color="success"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              startIcon={<WhatsAppIcon />}
            >
              {t('contact.whatsapp')}
            </Button>
            <Button variant="outlined" href={`mailto:${profile.email}`} startIcon={<Mail />}>
              {profile.email}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
