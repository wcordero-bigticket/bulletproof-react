import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import * as React from 'react';

type IconProps =
  | { icon?: string; svgIcon?: never }
  | { svgIcon: React.ReactElement; icon?: never }
  | { svgIcon?: never; icon?: never }
  | { svgIcon?: undefined; icon?: never };

export type TipsProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  content?: string;
} & IconProps;

export const Tips = React.forwardRef<HTMLButtonElement, TipsProps>(
  ({ title = '', content = '', icon = '' }) => {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" sx={{ minHeight: 275 }}>
          <React.Fragment>
            <CardContent>
              <Icon color="primary">{icon}</Icon>
              <Typography variant="h5" component="div" sx={{ mb: 1.5 }} color="text.primary">
                {title}
              </Typography>
              <Typography variant="body2">{content}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    );
  }
);

Tips.displayName = 'Card';
