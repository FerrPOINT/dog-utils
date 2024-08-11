
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, addUser } from '../../redux/usersSlice';

function UserSelector() {
  const dispatch = useDispatch();
  const { users, selectedUser } = useSelector(state => state.users);

  const handleUserChange = (e) => {
    dispatch(selectUser(e.target.value));
  };

  const handleAddUser = () => {
    const name = prompt('Введите имя пользователя:');
    if (name) {
      dispatch(addUser({ id: Date.now(), name }));
    }
  };

  return (
    <div>
      <select value={selectedUser?.id || ''} onChange={handleUserChange}>
        <option value="">Выберите пользователя</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <button onClick={handleAddUser}>Добавить пользователя</button>
    </div>
  );
}

export default UserSelector;
