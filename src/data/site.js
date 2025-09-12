export const org = {
	name: "Family Connection & Communities in Schools of Glascock County",
	shortName: "Glascock Family Connections",
	phone: "(706) 598-0722",
	fax: "(706) 598-0797",
	phoneHref: "tel:+17065980722",
	address: "370 West Main St., Gibson, GA",
	email: "jkelley@glascock.k12.ga.us",
	donateUrl: "https://www.paypal.com/ncp/payment/UZSCNKRCUAQGN", // swap to your PayPal/NCP when ready
};

export const services = [
	{
		title: "After-School & Summer",
		blurb: "Homework help, snacks, enrichment.",
	},
	{
		title: "AmeriCorps Tutors (K–3)",
		blurb: "Reading & math support with trained tutors.",
	},
	{ title: "Backpack Program", blurb: "Weekend food support for students." },
	{ title: "Car Seats & Cribs", blurb: "Safety for little ones and families." },
	{ title: "Family Navigation", blurb: "Case management & local referrals." },
	{ title: "Workforce / WIOA", blurb: "Career pathways and youth employment." },
];

// export const updates = [
// 	{
// 		title: "Collaborative Meeting",
// 		desc: "4th Wednesday • 10:00 AM • Family Connections Resource Center",
// 		link: "/about", // meeting info lives on About
// 	},
// 	{
// 		title: "After-School is Open",
// 		desc: "K–12 support, snacks & tutoring. Ask about bus options.",
// 		link: "/programs#after-school-summer", // anchor on Programs
// 	},
// 	{
// 		title: "Pantry & Essentials",
// 		desc: "Food, diapers, and paper goods. Please call ahead.",
// 		// choose the best match; Backpack/GHFB is usually the pantry entry
// 		link: "/programs#backpack-program-through-ghfb",
// 		// or use "/contact" if you prefer
// 	},
// ];

// Meeting dates (month is 1–12). Add/change dates each year.
export const meetingSchedule = [
	{ month: 3, day: 26, time: "10:00 AM" }, // March 26
	{ month: 6, day: 25, time: "10:00 AM" }, // June 25
	{ month: 9, day: 24, time: "10:00 AM" }, // September 24
	{ month: 12, day: 8, time: "Holiday Luncheon" },
];

// format helpers
function pad(n) {
	return n.toString().padStart(2, "0");
}
function formatDate(d) {
	return d.toLocaleDateString(undefined, { month: "long", day: "numeric" });
}

// compute next upcoming meeting (based on today)
export function getNextMeeting(schedule = meetingSchedule) {
	const now = new Date();
	const yr = now.getFullYear();

	// turn month/day into real dates in the current year
	const candidates = schedule.map(({ month, day, time }) => ({
		date: new Date(`${yr}-${pad(month)}-${pad(day)}T00:00:00`),
		time,
	}));

	// if all have passed, roll them to next year
	const future = candidates.filter(
		(c) => c.date >= new Date(now.toDateString())
	);
	const next =
		future.length > 0
			? future[0]
			: {
					date: new Date(
						`${yr + 1}-${pad(schedule[0].month)}-${pad(schedule[0].day)}T00:00:00`
					),
					time: schedule[0].time,
				};

	return {
		label: `${formatDate(next.date)} • ${next.time}`,
		anchor: "/about#collaborative-meetings", // link straight to the section on About
	};
}

// Homepage announcement cards
export function getUpdates() {
	const { label, anchor } = getNextMeeting();
	return [
		{
			title: "Collaborative Meeting",
			desc: label + " • Family Connections Resource Center",
			link: anchor,
		},
		{
			title: "After-School is Open",
			desc: "K–12 support, snacks & tutoring. Ask about bus options.",
			link: "/programs#after-school-summer",
		},
		{
			title: "Pantry & Essentials",
			desc: "Food, diapers, and paper goods. Please call ahead.",
			link: "/programs#backpack-program-through-ghfb",
		},
	];
}
