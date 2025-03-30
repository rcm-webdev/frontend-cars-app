const timelineData = [
  { year: "1984", description: "Hot Wheels" },
  { year: "1998", description: "Matchboxes" },
  { year: "2001", description: "Gold" },
  { year: "2007", description: "Silver" },
  { year: "2015", description: "Bronze" },
];

function Timeline() {
  return (
    <div className="max-w-5xl mx-auto mb-20 hidden md:block">
      <ul className="timeline justify-center">
        {timelineData.map((item, index) => (
          <li key={index}>
            {index !== 0 && <hr />}
            <div className="timeline-start">{item.year}</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 md:h-12 md:w-12"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box text-base md:text-xl">
              {item.description}
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timeline;
