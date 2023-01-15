import * as dotenv from 'dotenv'
import AWS from 'aws-sdk';
// Models
import { GetJobResult, ListJobsResult } from 'aws-sdk/clients/amplify';
// Load .env
dotenv.config()

const creds = new AWS.SharedIniFileCredentials(
    { profile: process.env.AWS_PROFILE }
);
const myConfig = new AWS.Config({
    credentials: creds, region: process.env.AWS_REGION
});
const amplify = new AWS.Amplify(myConfig);


const listJobs = (appId: string, branchName: string) : Promise<ListJobsResult> => {
    return new Promise((resolve, reject) => {
        const params = {
            appId,
            branchName,
            maxResults: 1,
        };
        amplify.listJobs(params, function (err, data) {
            if (err) reject(err);
            else resolve(data);
        });
    })
}
const getJob = (appId: string, branchName: string, jobId: string): Promise<GetJobResult> => {
    return new Promise((resolve, reject) => {
        amplify.getJob({
            appId,
            branchName,
            jobId,
        }, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    })
}

const main = async () => {
    const branch = 'main';
    const appId = 'd3nw24y9875lkv';
    try {
        const listResult = await listJobs(appId, branch);
        const { jobSummaries } = listResult;
        const [{ jobId }] = jobSummaries;
        console.log(jobId);

        const jobResult = await getJob(appId, branch, jobId)
        const {summary, steps } = jobResult.job;
        const { status, commitMessage, startTime, endTime } = summary;
        console.log(status, commitMessage, startTime, endTime);
        steps.forEach(step => {
            const { stepName, status, startTime, endTime, logUrl } = step;
            console.log(stepName, status, startTime, endTime);
        });
    } catch (err) {
        console.log(err);
    }
}
main();

