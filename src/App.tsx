import React, { FormEvent, useState } from 'react';

import { usePeopleList } from './hooks/PeopleList';
import { Container } from './styles/AppStyles';

const App: React.FC = () => {

  const [list, dispatch] = usePeopleList();
  const [name, setName] = useState('');

  function handleAdd(e: FormEvent) {
    e.preventDefault();
    if (name) {
      dispatch({
        type: 'ADD',
        payload: {
          name
        }
      })
    }
    setName('');
  }

  function handleDelete(id: string) {
      dispatch({
        type: 'DEL',
        payload: {
          id,
        }
      })
  }

  const handleOrder = () => {
    dispatch({
      type: 'ORDER',
    })
  }

  return (
    <Container>
 
      <div>

      <form>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={handleAdd}>ADD</button>
      </form>


      </div>
      

      <div>
        <table>
        <button onClick={handleOrder}>ORDER</button>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th colSpan={2}>Actions</th>
          </tr>
          <>
          {list.map((item, index) => (
            <tr key={index}>
              <td>
                {item.id}
              </td>
              <td>
                {item.name}
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>DELETE</button>
              </td>
              
            </tr>
          ))}
          </>
          
        </table>
      </div>
     
    </Container>
  );
}

export default App;