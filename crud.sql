PGDMP     6                     z            crud    13.1    13.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16395    crud    DATABASE     h   CREATE DATABASE crud WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE crud;
                postgres    false                        3079    16401 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    16396    identifications    TABLE     �   CREATE TABLE public.identifications (
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    id integer NOT NULL
);
 #   DROP TABLE public.identifications;
       public         heap    postgres    false            �            1259    16432    identifications_id_seq    SEQUENCE     �   CREATE SEQUENCE public.identifications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.identifications_id_seq;
       public          postgres    false    201            �           0    0    identifications_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.identifications_id_seq OWNED BY public.identifications.id;
          public          postgres    false    202            .           2604    16434    identifications id    DEFAULT     x   ALTER TABLE ONLY public.identifications ALTER COLUMN id SET DEFAULT nextval('public.identifications_id_seq'::regclass);
 A   ALTER TABLE public.identifications ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    201            �          0    16396    identifications 
   TABLE DATA           D   COPY public.identifications (first_name, last_name, id) FROM stdin;
    public          postgres    false    201   �       �           0    0    identifications_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.identifications_id_seq', 15, true);
          public          postgres    false    202            0           2606    16442 .   identifications PK_4c4f716e96651b63e7369a42aeb 
   CONSTRAINT     n   ALTER TABLE ONLY public.identifications
    ADD CONSTRAINT "PK_4c4f716e96651b63e7369a42aeb" PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.identifications DROP CONSTRAINT "PK_4c4f716e96651b63e7369a42aeb";
       public            postgres    false    201            �   O   x���	�0���0BpA�^b�Ц�T��={��f]>�s=Ű�֛���ŝݳb"k�%!IdKY/�����~nl�     