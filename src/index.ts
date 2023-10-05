interface Universities {
  alpha_two_code: string;
  domains: [string];
  country: string;
  name: string;
  web_pages: [string];
}

const fetchApi = async (): Promise<void> => {
  const response = await fetch(
    "http://universities.hipolabs.com/search?country=United+States"
  );
  const data: Universities[] = await response.json();

  //   data.forEach((element) => {
  //     console.log(element);
  //   });
  const universities = document.querySelector(".universities");

  if (universities !== null) {
    const div: HTMLDivElement = document.createElement("div");
    div.setAttribute("class", "universiti");
    data.forEach((element) => {
      div.innerHTML += `<div>Name: ${element.name}, Country: ${element.country}, Website: ${element.web_pages}</div>`;
    });
    universities.appendChild(div);
  }
};
fetchApi();
