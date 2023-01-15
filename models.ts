export interface Summary {
    jobArn: string;
    jobId: string;
    commitId: string;
    commitMessage: string;
    commitTime: Date;
    startTime: Date;
    status: string;
    endTime: Date;
    jobType?: any;
}

export interface Screenshots {
    googlepixel: string;
    ipadair2: string;
    iphone7plus: string;
    iphone8: string;
    samsungs7: string;
}

export interface Step {
    stepName: string;
    startTime: Date;
    status: string;
    endTime: Date;
    logUrl: string;
    artifactsUrl: string;
    testArtifactsUrl: string;
    testConfigUrl: string;
    statusReason?: any;
    context: string;
    screenshots: Screenshots;
}

export interface Job {
    summary: Summary;
    steps: Step[];
}

export interface JonResult {
    job: Job;
}

export enum SummaryStatus {
    'PENDING',
    'PROVISIONING',
    'RUNNING',
    'FAILED',
    'SUCCEED',
    'CANCELLING',
    'CANCELLED'
}

export enum StepStatus {
    'PENDING',
    'PROVISIONING',
    'RUNNING',
    'FAILED',
    'SUCCEED',
    'CANCELLING',
    'CANCELLED',
}


export interface JobSummary {
    jobArn: string;
    jobId: string;
    commitId: string;
    commitMessage: string;
    commitTime: Date;
    startTime: Date;
    status: string;
    endTime: Date;
    jobType?: any;
}

export interface JobListResult {
    jobSummaries: JobSummary[];
    nextToken: string;
}