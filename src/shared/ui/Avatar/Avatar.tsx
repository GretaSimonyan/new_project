import {
  CSSProperties, useMemo,
} from 'react';

import {
  classNames,
  Mods,
} from '../../lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
	className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};
