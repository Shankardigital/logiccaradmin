import React from "react"
import { Redirect } from "react-router-dom"
import UserProfile from "../pages/Authentication/user-profile"
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import Branch from "../pages/Branch"
import Cars from "../pages/Cars"
import Addusers from "../pages/Addusers"
import Appuser from "../pages/Appuser"
import Addnewone from "../pages/Addnewone"
import Editone from "../pages/Editone"
import Viewuser from "../pages/Viewuser"
import Test from "../pages/Test"
import Brand from "../pages/Brand"
import Model from "../pages/Model"
import Version from "../pages/Version"
import Specification from "../pages/Specification"
import Fatures from "../pages/Fatures"
import Customers from "../pages/Customers"
import Driver from "../pages/drivers/Driver"
import Driverlist from "../pages/drivers/Driverlist"
import Editdriver from "../pages/drivers/Editdriver"
import Viewdrever from "../pages/drivers/Viewdrever"
import Bookings from "../pages/Bookings"
import Coupons from "../pages/Coupons"
import Banners from "../pages/Banners"
import Editcar from "../pages/Editcar"
import Viewcar from "../pages/Viewcar"
import Vendor from "../pages/Vendor"
import Wallets from "../pages/Wallets"
import Walletview from "../pages/Walletview"
import Wallethistory from "../pages/Wallethistory"
import Addbooking from "../pages/Addbooking"
import Returncar from "../pages/Returncar"
import Carassigned from "../pages/Bookings/Carassigned"
import Ontheway from "../pages/Bookings/Ontheway"
import Rental from "../pages/Bookings/Rental"
import Collectnow from "../pages/Bookings/Collectnow"
import Featurecollect from "../pages/Bookings/Featurecollect"
import Closed from "../pages/Bookings/Closed"
import Cancelled from "../pages/Bookings/Cancelled"
import Payment from "../pages/Vouchers/Payment"
import Deposite from "../pages/Vouchers/Deposite"
import RntInvoice from "../pages/Vouchers/RntInvoice"
import NonRentInvoice from "../pages/Vouchers/NonRentInvoice"
import Bookingview from "../pages/Bookings/Bookingview"
import Blockeduser from "pages/Blockeduser"
import Testing from "pages/Testing"
import Viewdeposite from "pages/Vouchers/Viewdeposite"
import Document from "pages/Vouchers/Document"
import Viewrent from "pages/Vouchers/Viewrent"
import Viewdocument from "pages/Vouchers/Viewdocument"
import Notification from "pages/notification/Notification"
import Addstaff from "pages/staff/Addstaff"
import Editstaff from "pages/staff/Editstaff"
import Stafflist from "pages/staff/Stafflist"
import Department from "pages/staff/Department"
import Roles from "pages/staff/Roles"
import Designation from "pages/staff/Designation"
import Privinizes from "pages/staff/Privinizes"
import Viewstaff from "pages/staff/Viewstaff"
import Cartype from "../pages/Cartype"
import Forget from "pages/Authentication/Forget"
import Otp from "pages/Authentication/Otp"
import Insurance from "pages/Insurance"
import Reports from "pages/Reports"
import Dashboard from "../pages/Dashboard/index"
import Carcolor from "pages/Carcolor"
import Emergency from "pages/Emergency"
import Addcar from "pages/Addcar"
import Resetpass from "pages/Authentication/Resetpass"
import ImmidiateBookingreport from "pages/Reports/ImmidiateBookingreport"
import CarAssignedReport from "pages/Reports/CarAssignedReport"
import OnthewayReport from "pages/Reports/OnthewayReport"
import RentalStartedReport from "pages/Reports/RentalStartedReport"
import ClosedReport from "pages/Reports/ClosedReport"
import CollectNowReport from "pages/Reports/CollectNowReport"
import CancelledReport from "pages/Reports/CancelledReport"
import FeatureCollectreport from "pages/Reports/FeatureCollectreport"

import Cancelledview from "pages/Bookings/Cancelledview"
import Closedview from "pages/Bookings/Closedview"
import Carassiginedview from "pages/Bookings/Carassiginedview"

import Featurecollectview from "pages/Bookings/Featurecollectview"
import Onthewayview from "pages/Bookings/Onthewayview"
import Rentalview from "pages/Bookings/Rentalview"

import Collectnowview from "pages/Bookings/Collectnowview"
import Dashboardview from "pages/Bookings/Dashboardview"

import MemberAgrement from "pages/policy/MemberAgrement"
import PrivacyPolicy from "pages/policy/PrivacyPolicy"
import FreePolicy from "pages/policy/FreePolicy"
import Eligibility from "pages/policy/Eligibility"
import UpcomingPeakSeason from "pages/policy/UpcomingPeakSeason"
import LogicinSafety from "pages/policy/LogicinSafety"
import InterStatePolicy from "pages/policy/InterStatePolicy"
import TermsConditions from "pages/policy/TermsConditions"

import MemberAgrement1 from "pages/DriverPolicy/MemberAgrement"
import PrivacyPolicy1 from "pages/DriverPolicy/PrivacyPolicy"
import FreePolicy1 from "pages/DriverPolicy/FreePolicy"
import Eligibility1 from "pages/DriverPolicy/Eligibility"
import UpcomingPeakSeason1 from "pages/DriverPolicy/UpcomingPeakSeason"
import LogicinSafety1 from "pages/DriverPolicy/LogicinSafety"
import InterStatePolicy1 from "pages/DriverPolicy/InterStatePolicy"
import TermsConditions1 from "pages/DriverPolicy/TermsConditions"

import EmergencyPending from "pages/Emergencypending"


import Viewnonrent from "pages/Vouchers/Viewnonrent"

import FirebaseNotification from "pages/FirebaseNotification"

import Editbooking from "pages/Editbooking"

import Whatsincluded from "pages/Whatsincluded"
import Locations from "pages/Locations"
import Whyus from "pages/Whyus"

import StatusReport from "pages/StatusReport/StatusReport"

import Blog from "../pages/StatusReport/index"


import Scheduled from "pages/Scheduled"


import Forcecollection from "pages/Bookings/Forcecollection"
import UpcomingCollection from "pages/Bookings/UpcomingCollection"
import UpcomingDeliveries from "pages/Bookings/UpcomingDeliveries"

import ViewBookings from "pages/Bookings/ViewBookings"

import ServiceRequest from "pages/ServiceRequest/ServiceRequest"
import Issuemanagement from "pages/Issuemanagement/Issuemanagement"
import NonRental from "pages/NonRental/NonRental"

import Delayed from "pages/ServiceRequest/Delayed"
import Resolved from "pages/ServiceRequest/Resolved"
import AllServicerequest from "pages/ServiceRequest/AllServicerequest"
import Schduleds from "pages/ServiceRequest/Schduled"


import BookingStatus from "pages/Bookings/BookingStatus"

import Report from "pages/Report"
 
import ViewServiceRequest from "pages/ServiceRequest/ViewServiceRequest"

import Subscription from "pages/Subscription/Subscription"
 
import Collection from "pages/Collections/Collection"

import ViewCarDetails from "pages/ViewCarDetails"

import CarSpecs from "pages/CarSpecs"

const authProtectedRoutes = [

  { path: "/ServiceRequest", component: ServiceRequest },
  { path: "/Issuemanagement", component: Issuemanagement },
  { path: "/NonRental", component: NonRental },

  { path: "/CarSpecs", component: CarSpecs },

  { path: "/ViewCarDetails", component: ViewCarDetails },

  { path: "/Subscription", component: Subscription },
  { path: "/Collection", component: Collection },


  { path: "/Report", component: Report },
  
  { path: "/ViewServiceRequest", component: ViewServiceRequest },

  { path: "/BookingStatus", component: BookingStatus },

  { path: "/Delayed", component: Delayed },
  { path: "/Resolved", component: Resolved },
  { path: "/AllServicerequest", component: AllServicerequest },
  { path: "/Schduleds", component: Schduleds },

  { path: "/Cancelledview", component: Cancelledview },
  { path: "/Closedview", component: Closedview },
  { path: "/Carassiginedview", component: Carassiginedview },
  { path: "/Featurecollectview", component: Featurecollectview },
  { path: "/Onthewayview", component: Onthewayview },
  { path: "/Collectnowview", component: Collectnowview },
  { path: "/Rentalview", component: Rentalview },
  { path: "/Scheduled", component: Scheduled },

  { path: "/Forcecollection", component: Forcecollection },
  { path: "/UpcomingCollection", component: UpcomingCollection },
  { path: "/UpcomingDeliveries", component: UpcomingDeliveries },
  { path: "/ViewBookings", component: ViewBookings },

  { path: "/Dashboardview", component: Dashboardview },

  { path: "/Whatsincluded", component: Whatsincluded },
  { path: "/Locations", component: Locations },
  { path: "/Whyus", component: Whyus },

  { path: "/FirebaseNotification", component: FirebaseNotification },

  { path: "/Editbooking", component: Editbooking },

  { path: "/Viewnonrent", component: Viewnonrent },


  { path: "/EmergencyPending", component: EmergencyPending },


  { path: "/MemberAgrement", component: MemberAgrement },
  { path: "/PrivacyPolicy", component: PrivacyPolicy },
  { path: "/FreePolicy", component: FreePolicy },
  { path: "/Eligibility", component: Eligibility },
  { path: "/UpcomingPeakSeason", component: UpcomingPeakSeason },
  { path: "/LogicinSafety", component: LogicinSafety },
  { path: "/InterStatePolicy", component: InterStatePolicy },
  { path: "/TermsConditions", component: TermsConditions },

  { path: "/Driver_MemberAgrement", component: MemberAgrement1 },
  { path: "/Driver_PrivacyPolicy", component: PrivacyPolicy1 },
  { path: "/Driver_FreePolicy", component: FreePolicy1 },
  { path: "/Driver_Eligibility", component: Eligibility1 },
  { path: "/Driver_UpcomingPeakSeason", component: UpcomingPeakSeason1 },
  { path: "/Driver_LogicinSafety", component: LogicinSafety1 },
  { path: "/Driver_InterStatePolicy", component: InterStatePolicy1 },
  { path: "/Driver_TermsConditions", component: TermsConditions1 },

  
  { path: "/Blog", component: Blog },

  { path: "/StatusReport", component: StatusReport },

  { path: "/dashboard", component: Dashboard },
  { path: "/branch", component: Branch },
  { path: "/cars", component: Cars },
  { path: "/users-list", component: Addusers },
  { path: "/appusers-list", component: Appuser },
  { path: "/blocked-users", component: Blockeduser },
  { path: "/addusers", component: Addnewone },
  { path: "/edituser", component: Editone },
  { path: "/viewuser", component: Viewuser },
  { path: "/Test", component: Test },
  { path: "/car-brand", component: Brand },
  { path: "/car-model", component: Model },
  { path: "/version", component: Version },
  { path: "/specification", component: Specification },
  { path: "/fatures", component: Fatures },
  { path: "/customers", component: Customers },
  { path: "/driver", component: Driver },
  { path: "/driver-list", component: Driverlist },
  { path: "/edit-driver", component: Editdriver },
  { path: "/view-driver", component: Viewdrever },
  { path: "/bookings", component: Bookings },
  { path: "/coupons", component: Coupons },
  { path: "/banners", component: Banners },
  { path: "/editcar", component: Editcar },
  { path: "/car-details", component: Viewcar },
  { path: "/Insurance", component: Insurance },
  { path: "/Reports", component: Reports },
  { path: "/vendor", component: Vendor },
  { path: "/wallet", component: Wallets },
  { path: "/wallet-details", component: Walletview },
  { path: "/wallet-history", component: Wallethistory },
  { path: "/addbooking", component: Addbooking },
  { path: "/returncar", component: Returncar },
  { path: "/Carcolor", component: Carcolor },
  { path: "/car-type", component: Cartype },
  { path: "/add-car", component: Addcar },
  { path: "/Emergency", component: Emergency },
  { path: "/booking-view", component: Bookingview },
  { path: "/carassigned", component: Carassigned },
  { path: "/ontheway", component: Ontheway },
  { path: "/rental", component: Rental },
  { path: "/collectnow", component: Collectnow },
  { path: "/feature-collect", component: Featurecollect },
  { path: "/closed", component: Closed },
  { path: "/cancelled", component: Cancelled },
  { path: "/notification", component: Notification },
  { path: "/Payment", component: Payment },
  { path: "/deposite", component: Deposite },
  { path: "/rentInvoice", component: RntInvoice },
  { path: "/non-rentInvoice", component: NonRentInvoice },
  { path: "/Testing", component: Testing },
  { path: "/history", component: Viewdeposite },
  { path: "/document", component: Document },
  { path: "/view-invoice", component: Viewrent },
  { path: "/view-document", component: Viewdocument },
  { path: "/add-staff", component: Addstaff },
  { path: "/edit-staff", component: Editstaff },
  { path: "/staff-list", component: Stafflist },
  { path: "/roles", component: Roles },
  { path: "/department", component: Department },
  { path: "/designation", component: Designation },
  { path: "/privinizes", component: Privinizes },
  { path: "/view-staff", component: Viewstaff },
  { path: "/profile", component: UserProfile },
  { path: "/Emergency", component: Emergency },
  { path: "/ImmidiateBookingreport", component: ImmidiateBookingreport },
  { path: "/CarAssignedReport", component: CarAssignedReport },
  { path: "/RentalStartedReport", component: RentalStartedReport },
  { path: "/OnthewayReport", component: OnthewayReport },
  { path: "/ClosedReport", component: ClosedReport },
  { path: "/CollectNowReport", component: CollectNowReport },
  { path: "/CancelledReport", component: CancelledReport },
  { path: "/FeatureCollectreport", component: FeatureCollectreport },

  { path: "/", exact: true, component: () => <Redirect to="/login" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/Forget", component: Forget },
  { path: "/Otp", component: Otp },
  { path: "/Resetpass", component: Resetpass },
]

export { publicRoutes, authProtectedRoutes }
