import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import COVER_IMAGE from '../../assets/img/Login/Blue White Minimal Creative Illustration Short Link Application Online Instagram Story (4).png';
import Gogle from '../../assets/img/Login/th.jpg';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'standard',
    subscription: 'active',
    phone: '',
    address: '',
    logo: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire (par exemple, envoi des données au backend)
    console.log(formData);
    // Redirigez vers la page de connexion une fois l'inscription terminée
    navigate('/login');
  };

  return (
    <div className='mx-auto max-w-screen-lg flex flex-col lg:flex-row mt-8 lg:ml-[285px] lg:mt-[150px] lg:mb-[100px] '>
      <div className='w-full lg:w-[350px] '>
        <img src={COVER_IMAGE} className=' lg:h-[800px] w-full  lg:rounded-l-lg lg:shadow-2xl' alt='Cover Image'/>
      </div>
      <div className='w-full lg:w-1/2 bg-[#f5F5F5] p-8 lg:rounded-r-lg lg:shadow-2xl'>
        <h2 className='text-4xl font-semibold mb-4'><span className='text-accent'>S</span>'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name='name'
            placeholder='Nom'
            value={formData.name}
            onChange={handleChange}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            required
          />
          <input 
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            required
          />
          <input 
            type='password'
            name='password'
            placeholder='Mot de passe'
            value={formData.password}
            onChange={handleChange}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            required
          />
          <input 
            type='password'
            name='confirmPassword'
            placeholder='Confirmez le mot de passe'
            value={formData.confirmPassword}
            onChange={handleChange}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            required
          />
          <input 
            type='text'
            name='phone'
            placeholder='Téléphone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            required
          />
          <input 
            type='text'
            name='address'
            placeholder='Adresse'
            value={formData.address}
            onChange={handleChange}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            required
          />
          <input 
            type='file'
            name='logo'
            accept='image/*'
            onChange={handleChange}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
          />
          <button type='submit' className='w-full bg-[#060606] hover:bg-accent text-white rounded-md py-3 mb-4'>
            S'inscrire
          </button>
        </form>
        <div className='w-full text-center mb-4'>
          <div className='w-full h-px bg-black'></div>
          <p className='relative inline-block px-2 bg-gray-200 text-sm'>ou</p>
        </div>
        <button className='w-full border border-black text-[#060606] bg-white hover:bg-gray-300 rounded-md py-3 flex items-center justify-center'>
          <img src={Gogle} alt='' className='w-4 mr-2'/>
          Inscription avec Google
        </button>
        <p className='mt-4 text-sm font-normal'>Vous avez déjà un compte ? <span className='font-semibold underline cursor-pointer'>Connectez-vous</span></p>
      </div>
    </div>
  );
}

export default SignUp;
