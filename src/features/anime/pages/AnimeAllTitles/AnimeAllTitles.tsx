import { Button, Grid, Tooltip } from '@mui/material';
import { FC, memo } from 'react';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { CheckboxWithLabel } from 'formik-mui';
import { AnimeFilter, initValues } from 'features/anime/components/animeSettings/animeFilters';
import { AnimeStatus } from 'store/core/models/animeCommon';

import styles from './AnimeAllTitles.module.css';

/** Anime all title page component. */
const AnimeAllTitlesComponent: FC = () => {
  const formik = useFormik<AnimeFilter>({
    initialValues: initValues,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
    },
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={8.5}>
        <div className='grid__images'>
          <a href="animeTitle.html"><img src="../img/38524.jpg" /></a>
          <a href="animeTitle.html"><img src="../img/40834.jpg" /></a>
          <a href="animeTitle.html"><img src="../img/45576.jpg" /></a>
          <a href="animeTitle.html"><img src="../img/5114.jpg" /></a>
          <a href="animeTitle.html"><img src="../img/9253.jpg" /></a>
          <a href="animeTitle.html"><img src="../img/47790.jpg" /></a>
          <a href="animeTitle.html"><img src="../img/48569.jpg" /></a>
        </div>
      </Grid>
      <Grid item xs={3.5}>
        <FormikProvider value={formik}>
          <Form>
            <div>
              <h3>Тип</h3>
              {Object.values(AnimeStatus).map((status, i) =>
                <div key={i} className={styles.filter_box}>
                  <Field
                    component={CheckboxWithLabel}
                    size='1rem'
                    type="checkbox"
                    name="status"
                    value={status}
                    Label={{ label: status }}
                  />
                  <Tooltip title="Аниме, которое в данный момент транслируется по телевидению">
                    <HelpOutlinedIcon className={styles.help_icon} />
                  </Tooltip>
                </div>
              )}
            </div>
            <Button type="submit">
              Искать
            </Button>
          </Form>
        </FormikProvider>
      </Grid>
    </Grid>
  );
};

export const AnimeAllTitles = memo(AnimeAllTitlesComponent);
