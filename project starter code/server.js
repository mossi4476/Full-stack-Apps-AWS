import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util.js';

// Init the Express application
const app = express();

// Set the network port
const port = process.env.PORT || 8082;

// Use the body parser middleware for post requests
app.use(bodyParser.json());

// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
// GET /filteredimage?image_url={{URL}}
app.get('/filteredimage', async (req, res) => {
  const imageUrl = req.query.image_url;

  // 1. Validate the image_url query
  if (!imageUrl) {
    return res.status(400).send({ message: 'The image_url query parameter is required.' });
  }

  try {
    // 2. Call filterImageFromURL(image_url) to filter the image
    const filteredPath = await filterImageFromURL(imageUrl);

    // 3. Send the resulting file in the response
    res.sendFile(filteredPath, (err) => {
      if (err) {
        return res.status(500).send({ message: 'Error processing image.' });
      }

      // 4. Delete any files on the server on finish of the response
      deleteLocalFiles([filteredPath]);
    });
  } catch (error) {
    res.status(422).send({ message: 'Unable to process the image at the provided URL.' });
  }
});

// Root Endpoint
// Displays a simple message to the user
app.get('/', async (req, res) => {
  res.send('try GET /filteredimage?image_url={{URL}}');
});

// Start the Server
app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log('press CTRL+C to stop server');
});
