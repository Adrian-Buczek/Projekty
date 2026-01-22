<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hodowla Świnek Morskich</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    $conn = mysqli_connect("localhost", "root", "", "hodowla2");
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
            <img src="peruwianka.jpg" alt="peruu">
                 <?php
            $sql = "SELECT * FROM rasy WHERE id = 1";
            $result = mysqli_query($conn, $sql);
            while($row = mysqli_fetch_assoc($result)){
                echo "<H1>Rasa: " . $row["rasa"]. "</H1>";
                }
            ?>
             <?php
            $sql = "SELECT * FROM swinki WHERE id = 6";
            $result = mysqli_query($conn, $sql);
            while($row = mysqli_fetch_assoc($result)){
                
                echo "
                    <p>Data urodzenia: {$row['data_ur']} </p>
                    <p>Oznaczenie miotu: {$row['miot']} </p>
                ";
                }
            ?>
            <hr>
            <h1>Świnki w tym miocie</h1>
            <?php
            $sql = "SELECT * FROM swinki WHERE id = 6";
            $result = mysqli_query($conn, $sql);
            while($row = mysqli_fetch_assoc($result)){
                
                echo "
                <h2>{$row['imie']} - {$row['cena']}zł</h2>
                <h4>{$row['opis']}</h4>
                ";
                }
            ?>
            <?php
            $sql = "SELECT * FROM swinki WHERE id = 7";
            $result = mysqli_query($conn, $sql);
            while($row = mysqli_fetch_assoc($result)){
                
                echo "
                <h2>{$row['imie']} - {$row['cena']}zł</h2>
                <h4>{$row['opis']}</h4>
                ";
                }
            ?>
            <?php
            $sql = "SELECT * FROM swinki WHERE id = 8";
            $result = mysqli_query($conn, $sql);
            while($row = mysqli_fetch_assoc($result)){
                
                echo "
                <h2>{$row['imie']} - {$row['cena']}zł</h2>
                <h4>{$row['opis']}</h4>
                ";
                }
            ?>
            <?php
            $sql = "SELECT * FROM swinki WHERE id = 9";
            $result = mysqli_query($conn, $sql);
            while($row = mysqli_fetch_assoc($result)){
                
                echo "
                <h2>{$row['imie']} - {$row['cena']}zł</h2>
                <h4>{$row['opis']}</h4>
                ";
                }
            ?>
           
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