<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfilePageController extends Controller
{
    public function index()
    {
        $profileSummary = [
            'image'           => "/images/nw-ervinne.jpg",
            'imageAlt'        => "Profile Image",
            'name'            => "Ervinne Sodusta",
            'role'            => "Backend Developer",
            'organization'    => "NuWorks Interactive Labs",
            'summaryLines'    => [
                "Engineer | Full Stack Developer | Mobile Developer | Team Leader | Tutor / Teacher",
                "ERP | Accounting | Inventory | Payroll | Mobile Apps | Custom Business Solutions"
            ]
        ];

        return view('server-side', ['profileSummary' => $profileSummary]);
    }

    public function jsRendered()
    {
        return view('client-side');
    }
}
