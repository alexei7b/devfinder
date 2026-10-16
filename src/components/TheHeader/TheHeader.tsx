import React from 'react';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';



import styles from './ThemeHeader.module.scss'



const TheHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        devfinder
      </div>
      <ThemeSwitcher />
    </div>
  )
}

export default TheHeader