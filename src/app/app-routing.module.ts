import { PaymentPopupModule } from './Components/payment-popup/payment-popup.module';
import { SwiperModule } from 'swiper/angular';
import { YourVouchersModule } from './Function/your-vouchers/your-vouchers.module';
import { BrandHomeModule } from './Function/brand-home/brand-home.module';
import { OrderModule } from './Function/order/order.module';
//#region Function
import { HomeComponent } from './Function/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#endregion

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'order',
    loadChildren: () =>
      import('./Function/order/order.module').then((x) => x.OrderModule),
  },
  {
    // đổi route vì thiết kế sửa khi đang code
    path: 'booking-now',
    loadChildren: () =>
      import('./Function/booking/booking.module').then((x) => x.BookingModule),
  },
  {
    path: 'brand-home/:brandID/:bid',
    loadChildren: () =>
      import('./Function/brand-home/brand-home.module').then(
        (x) => x.BrandHomeModule
      ),
  },
  {
    path: 'favourite',
    loadChildren: () =>
      import('./Function/favourite/favourite.module').then(
        (x) => x.FavouriteModule
      ),
  },
  {
    path: 'flash-sale',
    loadChildren: () =>
      import('./Function/flash-sale/flash-sale.module').then(
        (x) => x.FlashSaleModule
      ),
  },
  {
    path: 'history-payment',
    loadChildren: () =>
      import('./Function/history-payment/history-payment.module').then(
        (x) => x.HistoryPaymentModule
      ),
  },
  {
    path: 'input-address',
    loadChildren: () =>
      import('./Function/input-address/input-address.module').then(
        (x) => x.InputAddressModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Function/login/login.module').then((x) => x.LoginModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./Function/menu-total/menu-total.module').then(
        (x) => x.MenuTotalModule
      ),
  },
  {
    path: 'nice-deal',
    loadChildren: () =>
      import('./Function/nice-deal/nice-deal.module').then(
        (x) => x.NiceDealModule
      ),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./Function/notifications/notifications.module').then(
        (x) => x.NotificationsModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./Function/profile/profile.module').then((x) => x.ProfileModule),
  },
  {
    path: 'profile-edit',
    loadChildren: () =>
      import('./Function/profile-edit/profile-edit.module').then(
        (x) => x.ProfileEditModule
      ),
  },
  {
    path: 'rewards',
    loadChildren: () =>
      import('./Function/rewards/rewards.module').then((x) => x.RewardsModule),
  },
  {
    path: 'select-by-category',
    loadChildren: () =>
      import('./Function/select-by-category/select-by-category.module').then(
        (x) => x.SelectByCategoryModule
      ),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./Function/setting/setting.module').then((x) => x.SettingModule),
  },
  {
    path: 'voucher',
    loadChildren: () =>
      import('./Function/voucher/voucher.module').then((x) => x.VoucherModule),
  },
  {
    path: 'your-vouchers',
    loadChildren: () =>
      import('./Function/your-vouchers/your-vouchers.module').then(
        (x) => x.YourVouchersModule
      ),
  },

  {
    path: 'detail-booking/:brandID/:businessID',
    loadChildren: () =>
      import('./Function/detail-booking/detail-booking.module').then(
        (m) => m.DetailBookingModule
      ),
  },
  {
    path: 'detail-voucher/:id',
    loadChildren: () =>
      import('./Function/detail-voucher/detail-voucher.module').then(
        (m) => m.DetailVoucherModule
      ),
  },
  {
    path: 'confirm-order',
    loadChildren: () =>
      import('./Function/confirm-order/confirm-order.module').then(
        (m) => m.ConfirmOrderModule
      ),
  },
  {
    path: 'register-for-code',
    loadChildren: () =>
      import('./Function/register-for-code/register-for-code.module').then(
        (m) => m.RegisterForCodeModule
      ),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./Function/booking-now/booking-now.module').then(
        (m) => m.BookingNowModule
      ),
  },
  {
    path: 'introduce-food/:id',
    loadChildren: () =>
      import('./Function/introduce-food/introduce-food.module').then(
        (m) => m.IntroduceFoodModule
      ),
  },
  {
    path: 'OTP',
    loadChildren: () =>
      import('./Function/otp/otp.module').then((m) => m.OTPModule),
  },
  {
    path: 'create-user',
    loadChildren: () =>
      import('./Function/create-user/create-user.module').then(
        (m) => m.CreateUserModule
      ),
  },
  {
    path: 'select-restaurant/:brandID',
    loadChildren: () =>
      import('./Function/select-restaurant/select-restaurant.module').then(
        (m) => m.SelectRestaurantModule
      ),
  },
  { path: 'Components/method-payment', loadChildren: () => import('./Components/method-payment/method-payment.module').then(m => m.MethodPaymentModule) },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SwiperModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
