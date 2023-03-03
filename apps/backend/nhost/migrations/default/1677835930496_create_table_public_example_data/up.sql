CREATE TABLE "public"."example_data" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "column_1" numeric NOT NULL, "column_2" text NOT NULL, "column_3" text NOT NULL, "column_4" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));COMMENT ON TABLE "public"."example_data" IS E'An example table for query data';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
