import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { router as route } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { setPathname } from "@/app/redux/app-slice";
import { AccountBalanceWallet, AssignmentInd, AttachEmail, Checklist, Diversity1, Diversity3, Engineering, FolderShared, ForwardToInbox, Groups, Groups2, HistoryEdu, MarkEmailRead, MarkEmailUnread, People, PowerSettingsNew, PriceCheck, School, SupervisedUserCircle, Unsubscribe } from "@mui/icons-material";
import LogoutSection from "../_sections/logout-section";
import store from "../store/store";
import { get_user_login_thunk } from "@/app/redux/app-thunk";
import NotificationSection from "../_sections/notification-section";

const NAVIGATION = [
    {
        kind: "header",
        title: "Main items",
    },
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },
    // {
    //     segment: "employees",
    //     title: "Employees",
    //     icon: <Groups />,
    // },
    // {
    //     segment: "form_response",
    //     title: "Form Response",
    //     icon: <MarkEmailUnread />,
    //     children:[
    //         {
    //             segment: "pending",
    //             title: "Pendings",
    //             icon: <ForwardToInbox />,
    //         },
    //         {
    //             segment: "approved",
    //             title: "Approved",
    //             icon: <MarkEmailRead />,
    //         },
    //         {
    //             segment: "declined",
    //             title: "Declined",
    //             icon: <Unsubscribe />,
    //         },
    //     ]
    // },
    {
        segment: "pending",
        title: "Pendings",
        icon: <ForwardToInbox />,
    },
    {
        segment: "approved",
        title: "Approved",
        icon: <MarkEmailRead />,
    },
    
    {
        segment: "remaining_loan_records",
        title: "Released",
        icon: <Checklist />,
    },

    {
        segment: "declined",
        title: "Declined",
        icon: <Unsubscribe />,
    },

    {
        segment: "loan_tracker",
        title: "Loan Tracker",
        icon: <AttachEmail />,
    },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "Analytics",
    },
    {
        segment: "logout",
        title: "Logout",
        icon: <PowerSettingsNew />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});
function AdminLayout({ children }, props) {
    const { pathname } = useSelector((state) => state.app);
    const { window } = props;
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);


    useEffect(()=>{
        store.dispatch(get_user_login_thunk())
    },[])

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                if (path == '/logout') {
                    setOpen(true)
                }else{  
                    if (path == '/remaining_loan_records') {
                        route.visit(String("/administrator" + path+'?page=1&status=Remaining'));
                    }else if (path == '/form_response/approved' || path == '/form_response/pending' || path == '/form_response/declined') {
                        route.visit(String("/administrator" + path+'?page=1'));
                    }else{
                        route.visit(String("/administrator" + path));
                    }
                    dispatch(setPathname(path));
                }
               
            },
        };
    }, [pathname]);

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;
    return (
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
            branding={{
                logo: <img src="/images/logo.png"/>,
                title:'',
            }}
        >
            <NotificationSection />
            <DashboardLayout>
                <LogoutSection open={open} setOpen={setOpen}/>
                <div className="p-4">{children}</div>
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}

AdminLayout.propTypes = {
    window: PropTypes.func,
};

export default AdminLayout;
