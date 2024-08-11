
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOutputText } from '../../redux/textUtilsSlice';

function Base64Converter() {
  const dispatch = useDispatch();
  const { inputText } = useSelector(state => state.textUtils);

  useEffect(() => {
    try {
      const encoded = btoa(inputText);
      dispatch(setOutputText(encoded));
    } catch (e) {
      dispatch(setOutputText('Ошибка кодирования'));
    }
  }, [inputText, dispatch]);

  return (
    <div>
      <h3>Результат Base64:</h3>
      <textarea readOnly value={useSelector(state => state.textUtils.outputText)} rows="10" cols="50" />
    </div>
  );
}

export default Base64Converter;
