function Avatar({ imgSrc, size, position, altText }: AvatarType) {
  const classes = `${size} ${position}`;

  return <img src={imgSrc} className={classes} alt={altText} />;
}

export default Avatar;

type AvatarType = {
  imgSrc: string;
  size?: string;
  position?: string;
  altText?: string;
} & typeof defaultProps;

const defaultProps = {
  size: '',
  position: 'centered-logo',
  altText: 'ps-img',
};

Avatar.defaultProps = defaultProps;
