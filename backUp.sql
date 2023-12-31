PGDMP     #                    {            JOBS    15.3    15.3 c    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    JOBS    DATABASE     {   CREATE DATABASE "JOBS" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Belarus.1251';
    DROP DATABASE "JOBS";
                postgres    false            �            1259    16454    RequirementsCategories    TABLE     �   CREATE TABLE public."RequirementsCategories" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 ,   DROP TABLE public."RequirementsCategories";
       public         heap    postgres    false            �            1259    16453    RequirementsCategories_id_seq    SEQUENCE     �   CREATE SEQUENCE public."RequirementsCategories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."RequirementsCategories_id_seq";
       public          postgres    false    223            �           0    0    RequirementsCategories_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."RequirementsCategories_id_seq" OWNED BY public."RequirementsCategories".id;
          public          postgres    false    222            �            1259    16492 	   Responses    TABLE     �   CREATE TABLE public."Responses" (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "vacancyId" integer
);
    DROP TABLE public."Responses";
       public         heap    postgres    false            �            1259    16491    Responses_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Responses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Responses_id_seq";
       public          postgres    false    229            �           0    0    Responses_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Responses_id_seq" OWNED BY public."Responses".id;
          public          postgres    false    228            �            1259    16461    requirements    TABLE     �   CREATE TABLE public.requirements (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "RequirementsCategoryId" integer
);
     DROP TABLE public.requirements;
       public         heap    postgres    false            �            1259    16460    requirements_id_seq    SEQUENCE     �   CREATE SEQUENCE public.requirements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.requirements_id_seq;
       public          postgres    false    225            �           0    0    requirements_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.requirements_id_seq OWNED BY public.requirements.id;
          public          postgres    false    224            �            1259    16412 
   userSkills    TABLE       CREATE TABLE public."userSkills" (
    id integer NOT NULL,
    user_skills character varying(255) NOT NULL,
    leetcode_url character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
     DROP TABLE public."userSkills";
       public         heap    postgres    false            �            1259    16411    userSkills_id_seq    SEQUENCE     �   CREATE SEQUENCE public."userSkills_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."userSkills_id_seq";
       public          postgres    false    217            �           0    0    userSkills_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."userSkills_id_seq" OWNED BY public."userSkills".id;
          public          postgres    false    216            �            1259    16400    users    TABLE     '  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16399    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            �            1259    16435 	   vacancies    TABLE     ^  CREATE TABLE public.vacancies (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "vacanciseCategoryId" integer
);
    DROP TABLE public.vacancies;
       public         heap    postgres    false            �            1259    16473    vacanciesRequirements    TABLE     �   CREATE TABLE public."vacanciesRequirements" (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "vacancyId" integer,
    "requirementId" integer
);
 +   DROP TABLE public."vacanciesRequirements";
       public         heap    postgres    false            �            1259    16472    vacanciesRequirements_id_seq    SEQUENCE     �   CREATE SEQUENCE public."vacanciesRequirements_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."vacanciesRequirements_id_seq";
       public          postgres    false    227            �           0    0    vacanciesRequirements_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."vacanciesRequirements_id_seq" OWNED BY public."vacanciesRequirements".id;
          public          postgres    false    226            �            1259    16434    vacancies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vacancies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.vacancies_id_seq;
       public          postgres    false    221            �           0    0    vacancies_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.vacancies_id_seq OWNED BY public.vacancies.id;
          public          postgres    false    220            �            1259    16426    vacanciseCategories    TABLE     �   CREATE TABLE public."vacanciseCategories" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 )   DROP TABLE public."vacanciseCategories";
       public         heap    postgres    false            �            1259    16425    vacanciseCategories_id_seq    SEQUENCE     �   CREATE SEQUENCE public."vacanciseCategories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."vacanciseCategories_id_seq";
       public          postgres    false    219            �           0    0    vacanciseCategories_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."vacanciseCategories_id_seq" OWNED BY public."vacanciseCategories".id;
          public          postgres    false    218            �           2604    16457    RequirementsCategories id    DEFAULT     �   ALTER TABLE ONLY public."RequirementsCategories" ALTER COLUMN id SET DEFAULT nextval('public."RequirementsCategories_id_seq"'::regclass);
 J   ALTER TABLE public."RequirementsCategories" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    16495    Responses id    DEFAULT     p   ALTER TABLE ONLY public."Responses" ALTER COLUMN id SET DEFAULT nextval('public."Responses_id_seq"'::regclass);
 =   ALTER TABLE public."Responses" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    16464    requirements id    DEFAULT     r   ALTER TABLE ONLY public.requirements ALTER COLUMN id SET DEFAULT nextval('public.requirements_id_seq'::regclass);
 >   ALTER TABLE public.requirements ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    16415    userSkills id    DEFAULT     r   ALTER TABLE ONLY public."userSkills" ALTER COLUMN id SET DEFAULT nextval('public."userSkills_id_seq"'::regclass);
 >   ALTER TABLE public."userSkills" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    16403    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    16438    vacancies id    DEFAULT     l   ALTER TABLE ONLY public.vacancies ALTER COLUMN id SET DEFAULT nextval('public.vacancies_id_seq'::regclass);
 ;   ALTER TABLE public.vacancies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    16476    vacanciesRequirements id    DEFAULT     �   ALTER TABLE ONLY public."vacanciesRequirements" ALTER COLUMN id SET DEFAULT nextval('public."vacanciesRequirements_id_seq"'::regclass);
 I   ALTER TABLE public."vacanciesRequirements" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    16429    vacanciseCategories id    DEFAULT     �   ALTER TABLE ONLY public."vacanciseCategories" ALTER COLUMN id SET DEFAULT nextval('public."vacanciseCategories_id_seq"'::regclass);
 G   ALTER TABLE public."vacanciseCategories" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            ~          0    16454    RequirementsCategories 
   TABLE DATA           V   COPY public."RequirementsCategories" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   %�       �          0    16492 	   Responses 
   TABLE DATA           Z   COPY public."Responses" (id, "createdAt", "updatedAt", "userId", "vacancyId") FROM stdin;
    public          postgres    false    229   ��       �          0    16461    requirements 
   TABLE DATA           d   COPY public.requirements (id, name, "createdAt", "updatedAt", "RequirementsCategoryId") FROM stdin;
    public          postgres    false    225   ��       x          0    16412 
   userSkills 
   TABLE DATA           i   COPY public."userSkills" (id, user_skills, leetcode_url, "createdAt", "updatedAt", "userId") FROM stdin;
    public          postgres    false    217   ]�       v          0    16400    users 
   TABLE DATA           T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   O�       |          0    16435 	   vacancies 
   TABLE DATA           z   COPY public.vacancies (id, name, description, img, "createdAt", "updatedAt", "userId", "vacanciseCategoryId") FROM stdin;
    public          postgres    false    221   �       �          0    16473    vacanciesRequirements 
   TABLE DATA           m   COPY public."vacanciesRequirements" (id, "createdAt", "updatedAt", "vacancyId", "requirementId") FROM stdin;
    public          postgres    false    227   ��       z          0    16426    vacanciseCategories 
   TABLE DATA           S   COPY public."vacanciseCategories" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �       �           0    0    RequirementsCategories_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."RequirementsCategories_id_seq"', 2, true);
          public          postgres    false    222            �           0    0    Responses_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Responses_id_seq"', 7, true);
          public          postgres    false    228            �           0    0    requirements_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.requirements_id_seq', 2, true);
          public          postgres    false    224            �           0    0    userSkills_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."userSkills_id_seq"', 8, true);
          public          postgres    false    216            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 8, true);
          public          postgres    false    214            �           0    0    vacanciesRequirements_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."vacanciesRequirements_id_seq"', 4, true);
          public          postgres    false    226            �           0    0    vacancies_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.vacancies_id_seq', 3, true);
          public          postgres    false    220            �           0    0    vacanciseCategories_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."vacanciseCategories_id_seq"', 2, true);
          public          postgres    false    218            �           2606    16459 2   RequirementsCategories RequirementsCategories_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."RequirementsCategories"
    ADD CONSTRAINT "RequirementsCategories_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."RequirementsCategories" DROP CONSTRAINT "RequirementsCategories_pkey";
       public            postgres    false    223            �           2606    16497    Responses Responses_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Responses"
    ADD CONSTRAINT "Responses_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Responses" DROP CONSTRAINT "Responses_pkey";
       public            postgres    false    229            �           2606    16466    requirements requirements_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.requirements
    ADD CONSTRAINT requirements_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.requirements DROP CONSTRAINT requirements_pkey;
       public            postgres    false    225            �           2606    16419    userSkills userSkills_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."userSkills"
    ADD CONSTRAINT "userSkills_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."userSkills" DROP CONSTRAINT "userSkills_pkey";
       public            postgres    false    217            �           2606    17535    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    215            �           2606    17537    users users_email_key1 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key1 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key1;
       public            postgres    false    215            �           2606    17553    users users_email_key10 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key10 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key10;
       public            postgres    false    215            �           2606    17531    users users_email_key11 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key11 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key11;
       public            postgres    false    215            �           2606    17529    users users_email_key12 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key12 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key12;
       public            postgres    false    215            �           2606    17555    users users_email_key13 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key13 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key13;
       public            postgres    false    215            �           2606    17527    users users_email_key14 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key14 UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key14;
       public            postgres    false    215            �           2606    17539    users users_email_key2 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key2 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key2;
       public            postgres    false    215            �           2606    17541    users users_email_key3 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key3 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key3;
       public            postgres    false    215            �           2606    17543    users users_email_key4 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key4 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key4;
       public            postgres    false    215            �           2606    17545    users users_email_key5 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key5 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key5;
       public            postgres    false    215            �           2606    17547    users users_email_key6 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key6 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key6;
       public            postgres    false    215            �           2606    17533    users users_email_key7 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key7 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key7;
       public            postgres    false    215            �           2606    17549    users users_email_key8 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key8 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key8;
       public            postgres    false    215            �           2606    17551    users users_email_key9 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key9 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key9;
       public            postgres    false    215            �           2606    16408    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �           2606    16478 0   vacanciesRequirements vacanciesRequirements_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."vacanciesRequirements"
    ADD CONSTRAINT "vacanciesRequirements_pkey" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public."vacanciesRequirements" DROP CONSTRAINT "vacanciesRequirements_pkey";
       public            postgres    false    227            �           2606    16480 G   vacanciesRequirements vacanciesRequirements_vacancyId_requirementId_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."vacanciesRequirements"
    ADD CONSTRAINT "vacanciesRequirements_vacancyId_requirementId_key" UNIQUE ("vacancyId", "requirementId");
 u   ALTER TABLE ONLY public."vacanciesRequirements" DROP CONSTRAINT "vacanciesRequirements_vacancyId_requirementId_key";
       public            postgres    false    227    227            �           2606    16442    vacancies vacancies_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.vacancies
    ADD CONSTRAINT vacancies_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.vacancies DROP CONSTRAINT vacancies_pkey;
       public            postgres    false    221            �           2606    17572 0   vacanciseCategories vacanciseCategories_name_key 
   CONSTRAINT     o   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key" UNIQUE (name);
 ^   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key";
       public            postgres    false    219            �           2606    17574 1   vacanciseCategories vacanciseCategories_name_key1 
   CONSTRAINT     p   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key1" UNIQUE (name);
 _   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key1";
       public            postgres    false    219            �           2606    17568 2   vacanciseCategories vacanciseCategories_name_key10 
   CONSTRAINT     q   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key10" UNIQUE (name);
 `   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key10";
       public            postgres    false    219            �           2606    17592 2   vacanciseCategories vacanciseCategories_name_key11 
   CONSTRAINT     q   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key11" UNIQUE (name);
 `   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key11";
       public            postgres    false    219            �           2606    17584 2   vacanciseCategories vacanciseCategories_name_key12 
   CONSTRAINT     q   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key12" UNIQUE (name);
 `   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key12";
       public            postgres    false    219            �           2606    17594 2   vacanciseCategories vacanciseCategories_name_key13 
   CONSTRAINT     q   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key13" UNIQUE (name);
 `   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key13";
       public            postgres    false    219            �           2606    17566 2   vacanciseCategories vacanciseCategories_name_key14 
   CONSTRAINT     q   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key14" UNIQUE (name);
 `   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key14";
       public            postgres    false    219            �           2606    17576 1   vacanciseCategories vacanciseCategories_name_key2 
   CONSTRAINT     p   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key2" UNIQUE (name);
 _   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key2";
       public            postgres    false    219            �           2606    17578 1   vacanciseCategories vacanciseCategories_name_key3 
   CONSTRAINT     p   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key3" UNIQUE (name);
 _   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key3";
       public            postgres    false    219            �           2606    17580 1   vacanciseCategories vacanciseCategories_name_key4 
   CONSTRAINT     p   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key4" UNIQUE (name);
 _   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key4";
       public            postgres    false    219            �           2606    17582 1   vacanciseCategories vacanciseCategories_name_key5 
   CONSTRAINT     p   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key5" UNIQUE (name);
 _   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key5";
       public            postgres    false    219            �           2606    17586 1   vacanciseCategories vacanciseCategories_name_key6 
   CONSTRAINT     p   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key6" UNIQUE (name);
 _   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key6";
       public            postgres    false    219            �           2606    17570 1   vacanciseCategories vacanciseCategories_name_key7 
   CONSTRAINT     p   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key7" UNIQUE (name);
 _   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key7";
       public            postgres    false    219            �           2606    17588 1   vacanciseCategories vacanciseCategories_name_key8 
   CONSTRAINT     p   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key8" UNIQUE (name);
 _   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key8";
       public            postgres    false    219            �           2606    17590 1   vacanciseCategories vacanciseCategories_name_key9 
   CONSTRAINT     p   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_name_key9" UNIQUE (name);
 _   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_name_key9";
       public            postgres    false    219            �           2606    16431 ,   vacanciseCategories vacanciseCategories_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."vacanciseCategories"
    ADD CONSTRAINT "vacanciseCategories_pkey" PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public."vacanciseCategories" DROP CONSTRAINT "vacanciseCategories_pkey";
       public            postgres    false    219            �           2606    17620    Responses Responses_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Responses"
    ADD CONSTRAINT "Responses_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 M   ALTER TABLE ONLY public."Responses" DROP CONSTRAINT "Responses_userId_fkey";
       public          postgres    false    3248    229    215            �           2606    17625 "   Responses Responses_vacancyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Responses"
    ADD CONSTRAINT "Responses_vacancyId_fkey" FOREIGN KEY ("vacancyId") REFERENCES public.vacancies(id) ON UPDATE CASCADE ON DELETE SET NULL;
 P   ALTER TABLE ONLY public."Responses" DROP CONSTRAINT "Responses_vacancyId_fkey";
       public          postgres    false    221    3284    229            �           2606    17605 5   requirements requirements_RequirementsCategoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.requirements
    ADD CONSTRAINT "requirements_RequirementsCategoryId_fkey" FOREIGN KEY ("RequirementsCategoryId") REFERENCES public."RequirementsCategories"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 a   ALTER TABLE ONLY public.requirements DROP CONSTRAINT "requirements_RequirementsCategoryId_fkey";
       public          postgres    false    223    225    3286            �           2606    17558 !   userSkills userSkills_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."userSkills"
    ADD CONSTRAINT "userSkills_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public."userSkills" DROP CONSTRAINT "userSkills_userId_fkey";
       public          postgres    false    3248    215    217            �           2606    17615 >   vacanciesRequirements vacanciesRequirements_requirementId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."vacanciesRequirements"
    ADD CONSTRAINT "vacanciesRequirements_requirementId_fkey" FOREIGN KEY ("requirementId") REFERENCES public.requirements(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."vacanciesRequirements" DROP CONSTRAINT "vacanciesRequirements_requirementId_fkey";
       public          postgres    false    3288    227    225            �           2606    17610 :   vacanciesRequirements vacanciesRequirements_vacancyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."vacanciesRequirements"
    ADD CONSTRAINT "vacanciesRequirements_vacancyId_fkey" FOREIGN KEY ("vacancyId") REFERENCES public.vacancies(id) ON UPDATE CASCADE ON DELETE CASCADE;
 h   ALTER TABLE ONLY public."vacanciesRequirements" DROP CONSTRAINT "vacanciesRequirements_vacancyId_fkey";
       public          postgres    false    221    227    3284            �           2606    17595    vacancies vacancies_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.vacancies
    ADD CONSTRAINT "vacancies_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.vacancies DROP CONSTRAINT "vacancies_userId_fkey";
       public          postgres    false    221    3248    215            �           2606    17600 ,   vacancies vacancies_vacanciseCategoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.vacancies
    ADD CONSTRAINT "vacancies_vacanciseCategoryId_fkey" FOREIGN KEY ("vacanciseCategoryId") REFERENCES public."vacanciseCategories"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 X   ALTER TABLE ONLY public.vacancies DROP CONSTRAINT "vacancies_vacanciseCategoryId_fkey";
       public          postgres    false    3282    221    219            ~   O   x�3�tJL�N�K�4202�54�52V02�26�22�307�60�#�e��V��W�b������	P������R\1z\\\ �d      �   f   x�}���0c_����]����$ �6�-!ѝe�B�ș�,o�H��0�$�	�x�4�U�G�����T��S�F%�[P����*�6=�s0 Z:-�      �   S   x�3�tV�4202�54�52V02�26�21�377�60�'e�e��U���_���Z���_�Z�Po�`hjeVof�b�W� �0L      x   �   x�}��j�0���S��ն,;�|�;���X��4.�[��_r([B�"}���#d�m� �`P��`%�y��B����2E����D��guk
A����&�e�l�j���9��:���ג�Jc/t�!_�<
��A_s���Ѿ�vJs�M �^Σm6���ҡ]p�����mwZYؿw���C-F�Һm��螤o�y���wR��;(��9�͒l�      v   �  x�}�9s�P ��~E
�L�Y8TW�Հ�^& �a@A��.U���|�[|d�[�+-CZp�d&(� 2�iyL��̈́��b O4V(�:Q7�N�`Oţp�N�]n���H����0 ���/��P�$	��Cb�?K��jG6Z[;Vo���	��A�7�����\`>$\�����U�Oo<�!�A@Ɛ�%L��R�t��{S�h_;�mg��*�94��T�z�:�0ٶ>�2+~:��/ ��xN��d��)�u%=���6W��s:F�����{]���R��T[t��*�גg����4sm��ck�����2�O�L���6i�1��J�δ���w�d�� ;,�Q��-͕������nK��~d`����	� ~p��ɱ,�\��      |   �   x���1
�0@����$��ߴif�����"8��������"j��{#������G����;�|�_����U�jSF�O|�[Ww;�[m��'R_jL)���ϴ�e�Tz"���Z/Z$�����`�Ł�_J����ɿoH!���I��$@���=rj��/�f�      �   M   x�}˻�0E��L�>22�`f��s)M�_}�EA�6A�V d��}�K�_*B��k가�O�|�=���=)�v&�QK!x      z   w   x�3⼰�.�8��^ �p�_�bP`�}�.l�4202�54�5�P04�21�24�353�60�#�e�ya���*\�4o߅�v]lBh1V02�26�20�32D5C�+F��� ~+:�     