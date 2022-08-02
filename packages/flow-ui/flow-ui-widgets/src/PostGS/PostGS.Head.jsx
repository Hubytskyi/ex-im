import React from 'react';
import { Link as GLink } from 'gatsby'
import { Link, Text } from 'theme-ui'
import TextList from '@components/TextList';
import PageTitle from '@components/PageTitle';

const styles = {
  item: {
    display: `inline-block`
  }
};

export const PostGSHead = ({title, author, date, category, timeToRead, categoryGS}) => {

  const authorName = author.split('_').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')

  const info = (
    <TextList>
      {author && (
        <Text sx={styles.item}>
          {`By `}
          <Link variant='mute' as={GLink} to={`/${author}`}>
            <strong>{authorName}</strong>
          </Link>
        </Text>
      )}
      {category && (
        <Text sx={styles.item}>
          {`Published in `}
          <Link variant='mute' as={GLink} to={`/${category}`}>
            <strong>{categoryGS.name}</strong>
          </Link>
        </Text>
      )}
      {date && <Text sx={styles.item}>{date}</Text>}
      {timeToRead && (
        <Text sx={{...styles.item, color: `error`}}>
          <strong>{timeToRead} min read</strong>
        </Text>
      )}
    </TextList>
  );

  return <PageTitle header={title} running={info}/>;
};
