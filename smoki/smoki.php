<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smoki</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <?php
    $conn = mysqli_connect('localhost', 'root', '', 'smoki');

    ?>
    <header>
        <h2>Poznaj smoki</h2>
    </header>
    <nav>
        <a href="#" id="blok1">Baza</a>
        <a href="#" id="blok2">Opisy</a>
        <a href="#" id="blok3">Galeria</a>
    </nav>
    <main>
        <section id = "s1">
            <h3>Baza smoków</h3>
            <form action="" method="POST">
                <select name="pochodzenie" id="pochodzenie">
                    
                    <?php
                    $sql = "SELECT DISTINCT pochodzenie FROM smok ORDER BY pochodzenie ASC";
                    $result = mysqli_query($conn, $sql);
                    while($row = mysqli_fetch_assoc($result)){
                        $pochodzenie = $row['pochodzenie'];
                        echo "<option value='$pochodzenie'>$pochodzenie</option>";
                    }

                    ?>

                </select>
                <button>Szukaj</button>
            </form>
            <table>
                <tr>
                    <th>Nazwa</th>
                    <th>Długość</th>
                    <th>Szerokość</th>
                </tr>
                <tr>
                    <?php
                    if($_SERVER['REQUEST_METHOD'] == 'POST'){
                        $pochodzenie = $_POST['pochodzenie'];
                        $sql = "SELECT nazwa, dlugosc, szerokosc FROM smok WHERE pochodzenie = '$pochodzenie'";
                        $result = mysqli_query($conn, $sql);

                        while($row = mysqli_fetch_assoc($result)){
                            echo "<tr>
                            <td>$row[nazwa]</td>
                            <td>$row[dlugosc]</td>
                            <td>$row[szerokosc]</td>
                            </tr>";
                        }
                    }
                    ?>
                </tr>
            </table>
        </section>
        <section id = "s2">
            <h3>Opisy smoków</h3>
            <dl>
                <dt>Smok czerwony</dt>
                <dd>Pochodzi z Chin. Ma 1000 lat. Żywi się mniejszymi zwierzętami. Posiada łuski cenne na rynkach wschodnich do wyrabiania lekarstw. Jest dziki i groźny.</dd>

                <dt>Smok zielony</dt>
                <dd>Pochodzi z Bułgarii. Ma 10000 lat. Żywi się mniejszymi zwierzętami, ale tylko w kolorze zielonym. Jest kosmaty. Z sierści zgubionej przez niego, tka się najdroższe materiały.</dd>

                <dt>Smok niebieski</dt>
                <dd>Pochodzi z Francji. Ma 100 lat. Żywi się owocami morza. Jest natchnieniem dla najlepszych malarzy. Często im pozuje. Smok ten jest przyjacielem ludzi i czasami im pomaga. Jest jednak próżny i nie lubi się przepracowywać.</dd>
            </dl>
        </section>
        <section id = "s3">
            <h3>Galeria</h3>
            <img src="smok1.jpg" alt="Smok czerwony">
            <img src="smok2.jpg" alt="Smok zielony">
            <img src="smok3.jpg" alt="Smok niebieski">
        </section>
        
    </main>
    <footer>
        <p>Stronę opracował: 0000000000</p>
    </footer>
    <?php
    mysqli_close($conn);
    ?>
    <script src="script.js"></script>
</body>
</html>
