import { Button, Grid, Tooltip } from '@mui/material';
import { FC, memo } from 'react';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { CheckboxWithLabel } from 'formik-mui';
import { AnimeFilter, initValues } from 'features/anime/components/animeSettings/animeFilters';

import styles from './AdminPage.module.css';

/** Anime all title page component. */
const AdminPageComponent: FC = () => {

  return (
    <h1>Add anime</h1>
    
  );
};

export const AdminPage = memo(AdminPageComponent);
