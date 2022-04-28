import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';

import BuildingIcon from '@/assets/img/building-icon.svg';
import { Button, Tips } from '@/components/Elements';
import { Head } from '@/components/Head';
import { useAuth } from '@/lib/auth';

export const Splash = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const tips = [
    {
      id: 1,
      title: 'It takes only 15 minutes',
      content: '... or one coffe breack.',
      icon: 'clock',
    },
    {
      id: 2,
      title: 'Your data is protected',
      content: 'With built-in bank-grade security',
      icon: 'lock',
    },
    {
      id: 3,
      title: 'Your progress will be saved',
      content: 'You can stop anytime and finish later',
      icon: 'circle check',
    },
  ];
  const handleStart = () => {
    if (user) {
      navigate('/app');
    } else {
      navigate('/auth/login');
    }
  };
  return (
    <>
      <Head description="Welcome to Bigticket Platform" />
      <div className="bg-white h-[100vh] flex items-center">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="w-[10%] mx-auto">
            <img src={BuildingIcon} alt="react" className="logo" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
            <span className="block">Hi Wendy, Welcome to Big Ticket.</span>
          </h2>
          <small>
            You have been granted access to the Big Ticket Platform by James Madison from Liberty
            Brokers LLC.
          </small>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {Array.from(tips).map((tip) => (
                <Grid item xs={4} key={tip.id}>
                  <Tips title={tip.title} content={tip.content} icon={tip.icon}></Tips>
                </Grid>
              ))}
            </Grid>
          </Box>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button
                onClick={handleStart}
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                      l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                      c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                      c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                      S1.293,9.212,1.729,9.212z"
                    />
                  </svg>
                }
              >
                Start
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
