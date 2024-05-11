const shifts = [
    ["Alice", "Monday", "Morning"],
    ["Frank", "Monday", "Morning"],
    ["Bob", "Monday", "Evening"],
    ["Charlie", "Tuesday", "Afternoon"],
    ["David", "Tuesday", "Morning"],
    ["Eve", "Wednesday", "Evening"],
    ["Frank", "Wednesday", "Morning"],
    ["Grace", "Thursday", "Afternoon"],
    ["Alice", "Friday", "Morning"],
    ["Bob", "Friday", "Afternoon"],
    ["Charlie", "Monday", "Afternoon"]
];

const organizedShifts = shifts.reduce((acc, [employee, day, shift]) => {
    acc[day] = acc[day] || {};
    acc[day][shift] = acc[day][shift] || [];
    acc[day][shift].push(employee);
    return acc;
}, {});

console.log(organizedShifts);
