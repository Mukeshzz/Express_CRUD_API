import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

// Mock database
const users = [
  {
    
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    id: 1,
  },
  {
    
    first_name: 'Alice',
    last_name: 'Smith',
    email: 'alicesmith@example.com',
    id: 2,
  },
  {
    
    first_name: 'Rocky',
    last_name: 'Jhonson',
    email: 'rocky@example.com',
    id: 3,
  },
  {
    
    first_name: 'David',
    last_name: 'Miller',
    email: 'david@example.com',
    id: 4,
  },
  {
    
    first_name: 'Kane',
    last_name: 'William',
    email: 'william@example.com',
    id: 5,
  }
];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})

// Add user with id
router.post('/', (req, res) => {
    const user = req.body;

     

    res.send(`${user.first_name} has been added to the Database`);
}) 

router.get('/:id', (req, res) => {
    const { id } = req.params; //destructuring id from parmas

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    users = users.filter((user) => user.id !== id)
  
    res.send(`${id} deleted successfully from database`);
  });

router.patch('/:id', (req, res) => {
    const { id } = req.params;
  
    const { first_name, last_name, email} = req.body;
  
    const user = users.find((user) => user.id === id)
  
    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(email) user.email = email;
  
    res.send(`User with the ${id} has been updated`)
    
  });

export default router