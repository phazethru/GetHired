
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Image from 'next/image'
import styles from './page.module.css'
import JobList from "@/components/JobList";
import ReactDOM from 'react-dom/client';
import { Menu, MenuItem, View } from '@aws-amplify/ui-react';
import { Tabs } from '@aws-amplify/ui-react';

function App() {
  return (
    <main className={styles.main}>
    <Tabs 
      justifyContent="flex-start"
      defaultValue='Tab 1'
      items={[
        { label: 'Tab 1', value: 'Tab 1', content: 'Tab content #1' },
        { label: 'Tab 2', value: 'Tab 2', content: 'Tab content #2' },
        { label: 'Disabled tab', value: 'Tab 3', content: 'Tab content #3', isDisabled: true },
      ]}
    />

      <Menu menuAlign="start" >
        <MenuItem onClick={() => alert('Download')}>
          Download
        </MenuItem>
        <MenuItem onClick={() => alert('Create a Copy')}>
          Create a Copy
        </MenuItem>
        <MenuItem onClick={() => alert('Mark as Draft')}>
          Mark as Draft
        </MenuItem>
        <MenuItem isDisabled onClick={() => alert('Delete')}>
          Delete
        </MenuItem>
        <MenuItem onClick={() => alert('Attend a workshop')}>
          Attend a workshop
        </MenuItem>
      </Menu>

      <JobList />
      <div className={styles.grid}>
        <a
          href="https://docs.amplify.aws/gen2/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Review documentation for Amplify's code-first DX (Gen 2).</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/start/quickstart/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Quickstart <span>-&gt;</span>
          </h2>
          <p>Follow a tutorial to build a fullstack app with Amplify Gen 2.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/auth/set-up-auth/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Auth <span>-&gt;</span>
          </h2>
          <p>Zero-config Auth UI components with social sign-in and MFA.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/data/set-up-data/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Data <span>-&gt;</span>
          </h2>
          <p>
            Fully-typed real-time API with NoSQL database.
          </p>
        </a>
      </div>
    </main>
  )
}

export default withAuthenticator(App);
