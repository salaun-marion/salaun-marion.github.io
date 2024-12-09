import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Legend({ description, url }) {
  return (
    <>
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0% 25%',
          flexDirection: 'column',
          textAlign: 'justify',
          fontFamily: 'Libre Baskerville',
          fontWeight: '400',
          fontSize: '3vh',
          fontStyle: 'normal',
        }}
      >
        <ReactMarkdown children={description} remarkPlugins={[remarkGfm]} />
        {url ? (
          <a href={url} style={{ textDecoration: 'none', color: '#36454f' }}>
            <i>Click on the 🔗 to see more.</i>
          </a>
        ) : null}
      </p>
    </>
  );
}
