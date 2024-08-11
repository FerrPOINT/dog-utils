
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOutputText } from '../../redux/textUtilsSlice';

function LayoutSwitcher() {
  const dispatch = useDispatch();
  const { inputText } = useSelector(state => state.textUtils);

  const switchLayout = (text) => {
    const layoutMap = {
      'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к', 't': 'е', 'y': 'н', 'u': 'г', 'i': 'ш', 'o': 'щ', 'p': 'з',
      'a': 'ф', 's': 'ы', 'd': 'в', 'f': 'а', 'g': 'п', 'h': 'р', 'j': 'о', 'k': 'л', 'l': 'д',
      'z': 'я', 'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и', 'n': 'т', 'm': 'ь'
    };
    
    return text.split('').map(char => layoutMap[char] || char).join('');
  };

  useEffect(() => {
    const switchedText = switchLayout(inputText);
    dispatch(setOutputText(switchedText));
  }, [inputText, dispatch]);

  return (
    <div>
      <h3>Результат переключения раскладки:</h3>
      <textarea readOnly value={useSelector(state => state.textUtils.outputText)} rows="10" cols="50" />
    </div>
  );
}

export default LayoutSwitcher;
