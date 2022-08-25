import styles from './Avatar.module.css';

export function Avatar({hasBorder = true, src}: {
  hasBorder?: boolean | undefined; src: string; 
}) {
return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
    />
  );
}