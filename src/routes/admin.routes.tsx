import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

const adminPaths2 = [
    {
        name: "Dashboard",
        path: '/admin/dashboard',
        Element: <AdminDashboard />
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: '/admin/create-admin',
                Element: <CreateAdmin />
            },
            {
                name: "Create Faculty",
                path: '/admin/create-faculty',
                Element: <CreateFaculty />
            },
            {
                name: "Create Student",
                path: '/admin/create-student',
                Element: <CreateStudent />
            },
        ]
    },
    {
        name: "Course Management",
        children: [
            {
                name: "Offered Course",
                path: '/admin/offered-course',
                Element: <CreateAdmin />
            },
        ]
    },
]


export const adminPaths = [
    {
        index: true,
        element: <AdminDashboard />
    },
    {
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        path: 'create-admin',
        element: <CreateAdmin />
    },
    {
        path: 'create-faculty',
        element: <CreateFaculty />
    },
    {
        path: 'create-student',
        element: <CreateStudent />
    },
];