import definition from '@/definition';
import { CSSVariable } from '@/global_style';
import styled from 'styled-components';
import sm from '@/global_states/server_metadata';

const Style = styled.div`
  font-size: 12px;
  color: ${CSSVariable.TEXT_COLOR_SECONDARY};
  text-align: center;

  > a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${CSSVariable.TEXT_COLOR_PRIMARY};
      text-decoration: underline;
    }
  }
`;

function ExtraInfo() {
  const serverMetadata = sm.useState();
  return (
    <Style>
      PWA Version:{' '}
      <a
        href={`https://github.com/mebtte/cicada/releases/tag/${definition.VERSION}`}
        target="_blank"
        rel="noreferrer"
      >
        {definition.VERSION}
      </a>
      {serverMetadata.version ? (
        <>
          , Server Version:{' '}
          <a
            href={`https://github.com/mebtte/cicada/releases/tag/${definition.VERSION}`}
            target="_blank"
            rel="noreferrer"
          >
            {serverMetadata.version}
          </a>
        </>
      ) : null}
    </Style>
  );
}

export default ExtraInfo;
