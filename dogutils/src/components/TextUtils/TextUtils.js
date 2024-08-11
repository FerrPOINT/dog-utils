
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputText, setOutputText, setConversionType } from '../../redux/textUtilsSlice';
import Base64Converter from './Base64Converter';
import HexConverter from './HexConverter';
import LayoutSwitcher from './LayoutSwitcher';

function TextUtils() {
  const dispatch = useDispatch();
  const { inputText, conversionType } = useSelector(state => state.textUtils);

  const handleInputChange = (e) => {
    dispatch(setInputText(e.target.value));
  };

  const handleConversionTypeChange = (type) => {
    dispatch(setConversionType(type));
  };

  return (
    <div>
      <div>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Введите текст"
          rows="10"
          cols="50"
        />
      </div>
      <div>
        <button onClick={() => handleConversionTypeChange('base64')}>Base64</button>
        <button onClick={() => handleConversionTypeChange('hex')}>HEX</button>
        <button onClick={() => handleConversionTypeChange('layout')}>Переключение раскладки</button>
      </div>
      <div>
        {conversionType === 'base64' && <Base64Converter />}
        {conversionType === 'hex' && <HexConverter />}
        {conversionType === 'layout' && <LayoutSwitcher />}
      </div>
    </div>
  );
}

export default TextUtils;
