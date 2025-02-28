import * as React from 'react';
import styles from './AiSmartHomeMs.module.scss';
import type { IAiSmartHomeMsProps } from './IAiSmartHomeMsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AiSmartHomeMs extends React.Component<IAiSmartHomeMsProps> {
  public render(): React.ReactElement<IAiSmartHomeMsProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.aiSmartHomeMs} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <div>
          <h2>Welcome to SharePoint Framework CRUD Operations</h2>
          <p>
            Microsoft Viva, Microsoft Teams and SharePoint.
          </p>
          <h4>Here the main changes in SPFx development:</h4>
          <ul className={styles.links}>
           
          
            <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
          </ul>
        </div>
      </section>
    );
  }
}
