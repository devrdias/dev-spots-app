import React, { useState , useMemo } from 'react'; 
import camera from '../../assets/camera.svg';
import api from '../../services/api';
import './styles.css';

const New = ({ history }) => {
  const [value, setValue] = useState({});
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    debugger;
    
    const data = new FormData();
    const user_id = localStorage.getItem('user');
    const { company , techs, price } = value;
    debugger;
    data.append('thumbnail' , thumbnail);
    data.append('company' , company);
    data.append('techs' , techs);
    data.append('price' , price);
    console.debug(data);
    
    await api.post('/spots', data, {
      headers: { user_id }
    });

    history.push('/dashboard');
  }

  function handleOnChange(event) {
    setValue({
      ...value,
      [event.target.name] : event.target.value
    });
  }


  const { company, techs, price } = value;
  return (
    <form onSubmit={handleSubmit}>
      <label 
        id="thumbnail" 
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={ event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select img"/>
      </label>
      <label htmlFor="company">EMPRESA *</label>
      <input 
        id="company"
        name="company"
        placeholder="Sua empresa incrível"
        value={company ? company : ''}
        onChange={handleOnChange}
      />
      <label htmlFor="company">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
      <input 
        id="techs"
        name="techs"
        placeholder="Quais tecnologias usam?"
        value={techs ? techs : ''}
        onChange={handleOnChange}
      />
      <label htmlFor="company">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
      <input 
        id="price"
        name="price"
        placeholder="Valor cobrado por dia"
        value={price ? price : ''}
        onChange={handleOnChange}
      />


      <button className="btn" type="submit">Cadastrar</button>
    </form>
  )
}

export default New;