import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import { pick } from '@/i18n';
import { BlogPostType, blogPosts } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/SectionHeading';

export const Blog = () => {
  const { lang, t } = useLanguage();
  const [openPost, setOpenPost] = useState<BlogPostType | null>(null);

  return (
    <Box id="blog" sx={{ mt: 6, scrollMarginTop: 88 }}>
      <SectionHeading title={t('sections.blog')} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 2,
        }}
      >
        {blogPosts.map(post => (
          <Card key={post.slug} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: 1 }}>
              <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap sx={{ mb: 1 }}>
                {post.tags.map(tag => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </Stack>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {pick(post.title, lang)}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {pick(post.excerpt, lang)}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {post.date} &middot; {post.readTime} min
              </Typography>
            </CardContent>
            <Box sx={{ p: 2, pt: 0 }}>
              <Button size="small" onClick={() => setOpenPost(post)}>
                {t('blog.readMore')}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>

      <Dialog open={openPost !== null} onClose={() => setOpenPost(null)} maxWidth="md" fullWidth>
        {openPost && (
          <>
            <DialogTitle>{pick(openPost.title, lang)}</DialogTitle>
            <DialogContent dividers>
              {pick(openPost.content, lang)
                .split('\n')
                .map((paragraph, index) => (
                  <Typography key={index} paragraph>
                    {paragraph}
                  </Typography>
                ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenPost(null)}>{t('blog.close')}</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};
