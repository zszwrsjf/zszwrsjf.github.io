import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, Stack } from '@mui/material';

const CustomPagination = ({
  count,
  page,
  onChange,
  variant = 'outlined',
  shape = 'rounded',
}) => (
  <Stack spacing={2} alignItems="center">
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      variant={variant}
      shape={shape}
    />
  </Stack>
);

CustomPagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.string,
  shape: PropTypes.string,
};

CustomPagination.defaultProps = {
  variant: 'outlined',
  shape: 'rounded',
};

export default CustomPagination;
