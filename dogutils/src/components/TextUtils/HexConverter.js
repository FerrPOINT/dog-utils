
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOutputText } from '../../redux/textUtilsSlice';

function HexConverter() {
  const dispatch = useDispatch();
  const { inputText } = useSelector(state => state.textUtils);

  useEffect(() => {
    try {
      const hex = inputText.split('').map(char => char.charCodeAt(0).toString(16)).join('');
      dispatch(setOutputText(hex));
    } catch (e) {
      dispatch(setOutputText('Ошибка кодирования'));
    }
  }, [inputText, dispatch]);

  return (
    <div>
      <h3>Результат HEX:</h3>
      <textarea readOnly value={useSelector(state => state.textUtils.outputText)} rows="10" cols="50" />
    </div>
  );
}

export default HexConverter;
