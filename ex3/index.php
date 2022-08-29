<html lang="en"  ng-app="myNinjaApp">

    <head>
        <base href="/" />
        <script src="/app/lib/angular.js"></script>
        <script src="/app/lib/angular-route.js"></script>
        <link rel="stylesheet" href="/content/css/styless.css">
        <script src="/app/app.js"></script>


    </head>

    <body>

        <table style="font-family: Arial;">
            <tr>
                <td colspan="2" class="header">
                    <h1> Website Header </h1>
                </td>
            </tr>
            <tr>
                <td class="leftMenu">
                    <a href="home">Home</a>
                    <a href="courses">Courses</a>
                    <a href="students">Students</a>
                </td>
                <td class="mainContent">
                    <ng-view></ng-view>
            
                </td>

            </tr>
            <tr>
                <td colspan="2" class="footer">
                    <b>Website Footer</b>
                </td>
            </tr>
        </table>

        <script src="/app/services/student.js"></script>


        <script src="/app/controllers/homeController.js"></script>
        <script src="/app/controllers/coursesController.js"></script>
        <script src="/app/controllers/studentController.js"></script>


    </body>

</html>


