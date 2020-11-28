import app from './server';
import config from './config';

const { PORT } = config;
 
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
