// components/JobList.tsx
"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function JobList() {
  const [jobs, setJobs] = useState<Schema["Job"][]>([]);

  async function listJobs() {
    // fetch all jobs
    const { data } = await client.models.Job.list();
    setJobs(data);
  }

  useEffect(() => {
    listJobs();
  }, []);

  return (
    <div>
      <h1>Jobs List</h1>
      <button onClick={async () => {
        // create a new Todo with the following attributes
        const { errors, data: newTodo } = await client.models.Job.create({
          // prompt the user to enter the title
          jobTitle: window.prompt("title"),
          postingURL: window.prompt("URL"),
        })
        console.log(errors, newTodo);
      }}>Create </button>

      <Table >
    <TableHead>
      <TableRow>
        <TableCell as="th">Job Title</TableCell>
        <TableCell as="th">Posting URL</TableCell>
        <TableCell as="th">Other</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {jobs.map((job) => (
        <TableRow>
          <TableCell><li key={job.id}>{job.jobTitle}</li></TableCell>
          <TableCell><li key={job.id}>{job.postingURL}</li></TableCell>
          <TableCell><li key={job.id}>{job.jobTitle}{job.postingURL}</li></TableCell>
        </TableRow>
          ))}
      

    </TableBody>
  </Table>
    </div>
  );
}