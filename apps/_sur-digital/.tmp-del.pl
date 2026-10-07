use strict;
use warnings;

my $file = "src/data/data.astro";
open(my $fh, "<", $file) or die $!;
local $/;
my $c = <$fh>;
close $fh;

my $orig = $c;

# Borra el bloque testimonials (con su comentario PLACEHOLDER) hasta la
# llave que cierra el array a nivel de indentación 2.
$c =~ s{[ ]{2}// ⚠️ PLACEHOLDERS: sustituye por reseñas reales.*?\n  \],\n\n}{}s;

die "no match\n" if $c eq $orig;

open(my $out, ">", $file) or die $!;
print $out $c;
close $out;
print "ok\n";
