import { useState } from 'react';

export default function Legend({ index }) {
  const [legendStyle, setLegendStyle] = useState({ display: 'none' });

  return (
    <>
      <p style={legendStyle}>You can see more here.</p>
    </>
  );
}
