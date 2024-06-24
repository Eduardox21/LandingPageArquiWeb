import { Routes } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { ServiceComponent } from './components/service/service.component';
import { CardsComponent } from './components/cards/cards.component';
import { CreateServiceComponent } from './components/service/create-service/create-service.component';
import { CreateRolesComponent } from './components/roles/create-roles/create-roles.component';
import { CreateCardsComponent } from './components/cards/create-cards/create-cards.component';
import { ForumComponent } from './components/forum/forum.component';
import { CreateForumComponent } from './components/forum/create-forum/create-forum.component';
import { LoginComponent } from './components/login/login.component';
import { segGuard } from './guard/seguridadd.guard';
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CreateNotificationComponent } from './components/notifications/create-notification/create-notification.component';
import { SuscriptionComponent } from './components/suscription/suscription.component';
import { CreateSuscriptionComponent } from './components/suscription/create-suscription/create-suscription.component';
import { TypeServiceComponent } from './components/type-service/type-service.component';
import { CreateTypeComponent } from './components/type-service/create-type/create-type.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CreateInvoiceComponent } from './components/invoice/create-invoice/create-invoice.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateDetailComponent } from './components/detail/create-detail/create-detail.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { CounselingComponent } from './components/counseling/counseling.component';
import { CreateCounselingComponent } from './components/counseling/create-counseling/create-counseling.component';
import { CommentComponent } from './components/comment/comment.component';
import { CreateCommentComponent } from './components/comment/create-comment/create-comment.component';
import { RegisterComponent } from './components/register/register.component';
import { CrearUsuarioComponent } from './components/register/crear-usuario/crear-usuario.component';
import { LandinghomeComponent } from './components/landinghome/landinghome.component';
import { EditUserComponent } from './components/perfil/edit-user/edit-user.component';
import { ReportsComponent } from './components/reports/reports.component';
import { Report02Component } from './components/reports/report02/report02.component';
import { Report03Component } from './components/reports/report03/report03.component';
import { Report04Component } from './components/reports/report04/report04.component';
import { Report05Component } from './components/reports/report05/report05.component';
import { Report06Component } from './components/reports/report06/report06.component';
import { Report07Component } from './components/reports/report07/report07.component';
import { Report08Component } from './components/reports/report08/report08.component';









export const routes: Routes = [
{
    path: 'landinghome',component:LandinghomeComponent
},
    
    {
        path: '',
        redirectTo: 'landinghome',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
        
    },
     {
        path: 'register',
        component: RegisterComponent,
        children:[
            {path:'registeruser',component:CrearUsuarioComponent},
            
        ]
        
    },
    {
        path: 'services',
        component: ServiceComponent,
        children: [
            { path: 'registerService', component: CreateServiceComponent },
            { path: 'ediciones/:id', component: CreateServiceComponent }
        ],
        canActivate: [segGuard]
    },
    {
        path: 'roles',
        component: RolesComponent,
        children: [
            { path: 'registerRole', component: CreateRolesComponent },
            { path: 'ediciones/:id', component: CreateRolesComponent }
        ],
        canActivate: [segGuard]
    },
    {
        path: 'cards',
        component: CardsComponent,
        children: [
            { path: 'registerCard', component: CreateCardsComponent },
            { path: 'ediciones/:id', component: CreateCardsComponent }
        ],
        canActivate: [segGuard]
    },
    {
        path: 'forum',
        component: ForumComponent,
        children: [
            { path: 'registerForum', component: CreateForumComponent },
            { path: 'ediciones/:id', component: CreateForumComponent }
        ],
        canActivate: [segGuard]
    },
    {
        path: 'Notification',
        component: NotificationsComponent,
        children: [
            { path: 'registerNotification', component: CreateNotificationComponent },
            { path: 'ediciones/:id', component: CreateNotificationComponent }
        ],
        canActivate: [segGuard]
    },
    {
        path: 'suscriptions',
        component: SuscriptionComponent,
        children: [
            { path: 'registersuscriptions', component: CreateSuscriptionComponent },
            { path: 'ediciones/:id', component: CreateSuscriptionComponent  }
        ],
        canActivate: [segGuard]
    },
    {
        path: 'homes',
        component: HomeComponent
    },
    {
        path: 'typeServices',
        component: TypeServiceComponent,
        children: [
            { path: 'registerTypeService', component: CreateTypeComponent },
        ],
        canActivate: [segGuard]
    },
    {
        path:'invoices', component: InvoiceComponent,
        children:[
            {path: 'registerInvoice', component: CreateInvoiceComponent },
        ],
        canActivate: [segGuard]
    },
    {
        path:'details', component: DetailComponent,
        children: [
           { path: 'registerDetail', component: CreateDetailComponent}
        ],
        canActivate: [segGuard]
    },
    {
        path:'posts', component: PostComponent,
        children: [
           { path: 'registerPost', component: CreatePostComponent},
           { path: 'ediciones/:id', component: CreatePostComponent}
        ],
        canActivate: [segGuard]
    },
    {
        path:'counselings', component: CounselingComponent,
        children: [
           { path: 'registerCounseling', component: CreateCounselingComponent},
           { path: 'ediciones/:id', component: CreateCounselingComponent  }
        ],
        canActivate: [segGuard]
    },
    {
        path: 'comments', component: CommentComponent,
        children: [
            {path:'registerComment', component: CreateCommentComponent}
            
        ],
        
    
    },

   
    
    {
        path: 'repo', component: ReportsComponent,
        children:[
            {path: 'registerReport02', component: Report02Component},
            {path: 'registerReport03', component: Report03Component},
            {path: 'registerReport04', component: Report04Component},
            {path: 'registerReport05', component: Report05Component},
            {path: 'registerReport06', component: Report06Component},
            {path: 'registerReport07', component: Report07Component},
            {path: 'registerReport08', component: Report08Component},
           
        ]
    }

   
    

];
