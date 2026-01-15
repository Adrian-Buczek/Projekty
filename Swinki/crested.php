<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hodowla Świnek Morskich</title>
    <link rel="stylesheet" href="style3.css">
</head>
<body>
<?php
    $conn = mysqli_connect("localhost", "root", "", "hodowla");
    ?>
    <header>
        <h1>Hodowla świnek morskich - zamów świnkowe maluszki</h1>
    </header>
    <main>
        <div id="SL">
        <div id="SG">
            <a href="peruwianka.php">Rasa Peruwianka</a>
            <a href="american.php">Rasa American</a>
            <a href="crested.php">Rasa Crested</a>
        </div>
        <div id="SD">
            <div id="SD"></div>
        </div>
        </div>
        <aside>
            <h3>Poznaj wszystkie rasy Świnek morskich</h3>
            <ol>
                <?php
                $sql = "SELECT rasa FROM rasy";
                $result = mysqli_query($conn, $sql);
                while($row = mysqli_fetch_assoc($result)){
            echo "<li> " . $row["rasa"]. "</li>";
            }
                ?>
            </ol>
        </aside>
    </main>
    <footer>
        <h4>Stronę wykonał: 000000000000000</h4>
    </footer>


</body>
</html>