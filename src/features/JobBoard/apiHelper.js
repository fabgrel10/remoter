const remotiveApi = 'https://remotive.io/api/remote-jobs?limit=200&category=software-dev&category=design&category=product&category=devops&category=qa';

const fetchJobs = async() => {
  const response = await fetch(remotiveApi);
  const jobsResponse = await response.json();
  const { jobs } = jobsResponse;
  const data = [];

  jobs.map(obj => {
    const dataObj = {};

    dataObj.id = obj.id;
    dataObj.url = obj.url;
    dataObj.title = obj.title;
    dataObj.companyName = obj.company_name;
    dataObj.publicationDate = obj.publication_date;
    dataObj.salary = obj.salary;
    dataObj.description = obj.description;
    dataObj.category = obj.category;

    return data.push(dataObj);
  });

  return data;
}


export default fetchJobs;
