import React from 'react';
import Link from '@material-ui/core/Link';

export default function Email() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("Dir-tour.goa@nic.in");
      }}
    >
      Email : Dir-tour.goa@nic.in
    </Link>
  );
}