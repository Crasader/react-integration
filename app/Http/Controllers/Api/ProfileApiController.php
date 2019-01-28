<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProfileApiController extends Controller
{
    public function getSummary()
    {
        return [
            'image'           => "/images/nw-ervinne.jpg",
            'imageAlt'        => "Profile Image",
            'name'            => "Ervinne Sodusta (Fetched from API)",
            'role'            => "Backend Developer",
            'organization'    => "NuWorks Interactive Labs",
            'summaryLines'    => [
                "Engineer | Full Stack Developer | Mobile Developer | Team Leader | Tutor / Teacher",
                "ERP | Accounting | Inventory | Payroll | Mobile Apps | Custom Business Solutions"
            ]
        ];
    }
}
